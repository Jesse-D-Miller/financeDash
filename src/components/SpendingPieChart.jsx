import BMOTransactions from "../data/credit/bmo_mock_transactions.json";
import TangerineTransactions from "../data/credit/tangerine_mock_transactions.json";
import TDTransactions from "../data/credit/td_mock_transactions.json";
import BMOChequing from "../data/chequing/bmo_chequing_transactions.json";
import BMOSavings from "../data/saving/bmo_savings_transactions.json";
import {
  Legend,
  Pie,
  PieChart,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

function SpendingPieChart() {
  const COLOURS = [
    "#6366F1", // indigo
    "#22C55E", // green
    "#F59E0B", // amber
    "#EF4444", // red
    "#0EA5E9", // sky blue
    "#14B8A6", // teal
    "#A855F7", // purple
    "#F97316", // orange
  ];

  //combine all transactionsinto one array
  const allTransactions = [
    ...BMOTransactions,
    ...TangerineTransactions,
    ...TDTransactions,
    ...BMOChequing,
    ...BMOSavings,
  ];

  //find transaction with most recent date
  const mostRecentTransaction = allTransactions.reduce((latest, tx) => {
    if (!latest) return tx; //first item by default

    const latestDate = new Date(latest.date);
    const currentDate = new Date(tx.date);

    return currentDate > latestDate ? tx : latest;
  }, null);

  console.log(mostRecentTransaction.date);

  //extract mostRecentTransaction year and month from yyyy-mm-dd
  const mostRecentDate = new Date(mostRecentTransaction.date);
  const targetYear = mostRecentDate.getFullYear(); //2025
  const targetMonth = mostRecentDate.getMonth(); //0-11, so 10 is november

  //we only want to keep transactions where targetYear and targetMonth match so we will filter using these constants
  //latest months transactions should reset whenever a more recent month posted
  const latestMonthsTransactions = allTransactions.filter((tx) => {
    const filteredDate = new Date(tx.date);
    return (
      filteredDate.getFullYear() === targetYear &&
      filteredDate.getMonth() === targetMonth
    );
  });

  //test where we should see only most recent months transactions
  console.log(latestMonthsTransactions.map((tx) => tx.date));

  //take latest months transactions and sort them into an object by category. if key doesn't exist, create it and add amount. if key exists, add amount to total
  const spendByCategory = {};
  for (let transaction of latestMonthsTransactions) {
    //this skips credit and payments so we only consider spending habits
    if (transaction.amount < 0) continue;

    const category = transaction.category;

    spendByCategory[category] =
      (spendByCategory[category] || 0) + transaction.amount;
  }

  //get a total spend value to calculate spend percentages
  const totalSpending = Object.values(spendByCategory).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  //convert spendByCategory from an object into an array of objects. This will make working with charting library much easier.
  //{ category: "Groceries", value: 500, percentage: 32.5 }
  const categoryData = [];
  for (let key in spendByCategory) {
    categoryData.push({
      category: key,
      amount: spendByCategory[key],
      percentage: (spendByCategory[key] / totalSpending) * 100,
    });
  }

  console.log(categoryData);

  //filter twice, once for data with a percent >= 1% and once for <1%
  const mainCategories = categoryData.filter(
    (category) => category.percentage >= 1
  );
  const smallCategories = categoryData.filter(
    (category) => category.percentage < 1
  );

  console.log(mainCategories);
  console.log(smallCategories);

  //if smallCategories total is >=1% add an "other" category to mainCategories
  const otherExpensesCategoryTotal = smallCategories.reduce(
    (accumulator, currentValue) => accumulator + currentValue.amount,
    0
  );

  if ((otherExpensesCategoryTotal / totalSpending) * 100 >= 1) {
    mainCategories.push({
      category: "Other",
      amount: otherExpensesCategoryTotal,
      percentage: (otherExpensesCategoryTotal / totalSpending) * 100,
    });
  }

  console.log(mainCategories);
  console.log(otherExpensesCategoryTotal);

  //assemble final data
  let chartDataFinal = mainCategories.map((categorySpend) => {
    return {
      name: categorySpend.category,
      value: categorySpend.amount,
      percentage: categorySpend.percentage,
    };
  });

  const currencyFormatter = new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  });

  return (
    <div className="pie-chart-container" style={{ gridArea: "box-6" }}>
      <h2>Category Breakdown</h2>

      <div className="chart-grid">
        <div className="chart-area">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartDataFinal}
                dataKey="value"
                nameKey="name"
                cx="60%"
                cy="50%"
                outerRadius="103%"
                fill="#8884d8"
                isAnimationActive={true}
              >
                {chartDataFinal.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLOURS[index % COLOURS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={(value, name, { payload }) => {
                  // value is the numeric "value" for this slice
                  // payload is the full data object: { name, value, percentage }
                  const percent = payload.percentage;

                  const formattedValue = currencyFormatter.format(value);
                  const formattedPercent = `${percent.toFixed(1)}%`;

                  // Tooltip expects [valueText, nameText]
                  return [`${formattedValue} (${formattedPercent})`, name];
                }}
              />
              <Legend layout="vertical" align="left" verticalAlign="middle" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default SpendingPieChart;
