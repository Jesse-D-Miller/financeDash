import BMOTransactions from "../data/credit/bmo_mock_transactions.json";
import TangerineTransactions from "../data/credit/tangerine_mock_transactions.json";
import TDTransactions from "../data/credit/td_mock_transactions.json";
import BMOChequing from "../data/chequing/bmo_chequing_transactions.json";
import BMOSavings from "../data/saving/bmo_savings_transactions.json";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

function OverviewMonthlySpendingChart() {
  //combine all transactionsinto one array
  const allTransactions = [
    ...BMOTransactions,
    ...TangerineTransactions,
    ...TDTransactions,
    ...BMOChequing,
    ...BMOSavings,
  ];

  //currency formatter (CAD)
  const currencyFormatter = new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  });

  //group by month(YYYY-MM) and sum positive amounts
  const spendByMonth = {};
  for (let transaction of allTransactions) {
    //skip non-spending transactions
    if (transaction.amount < 0) continue;

    const amount = transaction.amount;
    const monthKey = transaction.date.slice(0, 7); //"YYYY-MM"

    spendByMonth[monthKey] = (spendByMonth[monthKey] || 0) + amount;
  }

  //turn the object into an array: [{month: "YYYY-MM", total: number}, ...]
  let spendByMonthArray = [];
  for (let key in spendByMonth) {
    spendByMonthArray.push({ month: key, total: spendByMonth[key] });
  }

  //sort ascending by month (2024-01 → 2024-02 → ... → 2025-11)
  let sortedAscendingSpendByMonthArray = spendByMonthArray.sort((a, b) => {
    if (a.month < b.month) return -1;
    if (a.month > b.month) return 1;
    return 0;
  });

  //stop early if no data is present
  if (!sortedAscendingSpendByMonthArray.length) {
    return (
      <div className="card-account-snapshot" style={{ gridArea: "box-7" }}>
        <div className="card-title-with-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
            fill="#e3e3e3"
          >
            <path d="M186.67-80q-27 0-46.84-19.83Q120-119.67 120-146.67v-600q0-27 19.83-46.83 19.84-19.83 46.84-19.83h56.66V-880h70v66.67h333.34V-880h70v66.67h56.66q27 0 46.84 19.83Q840-773.67 840-746.67v600q0 27-19.83 46.84Q800.33-80 773.33-80H186.67Zm0-66.67h586.66v-420H186.67v420Zm0-486.66h586.66v-113.34H186.67v113.34Zm0 0v-113.34 113.34Z" />
          </svg>
          <h2>Monthly Spending</h2>
        </div>
        <p>No spending data available.</p>
      </div>
    );
  }

  // month label formatter: "2025-01" -> "Jan 2025"
  const formatMonthLabel = (monthKey) => {
    const [year, month] = monthKey.split("-");
    const date = new Date(Number(year), Number(month) - 1, 1);
    return date.toLocaleDateString("en-CA", {
      month: "short",
      year: "numeric",
    });
  };

  const mostRecent12 = sortedAscendingSpendByMonthArray.slice(-12);

  return (
    <div className="card-account-snapshot" style={{ gridArea: "box-7" }}>
      <div className="card-title-with-svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40px"
          viewBox="0 -960 960 960"
          width="40px"
          fill="#e3e3e3"
        >
          <path d="M186.67-80q-27 0-46.84-19.83Q120-119.67 120-146.67v-600q0-27 19.83-46.83 19.84-19.83 46.84-19.83h56.66V-880h70v66.67h333.34V-880h70v66.67h56.66q27 0 46.84 19.83Q840-773.67 840-746.67v600q0 27-19.83 46.84Q800.33-80 773.33-80H186.67Zm0-66.67h586.66v-420H186.67v420Zm0-486.66h586.66v-113.34H186.67v113.34Zm0 0v-113.34 113.34Z" />
        </svg>
        <h2>Monthly Spending</h2>
      </div>
      <div className="bar-chart-inner">
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={mostRecent12}>
            <CartesianGrid strokeDasharray="4 3" vertical={false} />
            <XAxis
              dataKey="month"
              tickFormatter={formatMonthLabel}
              tickMargin={8}
            />
            <YAxis
              tickFormatter={(value) => currencyFormatter.format(value)}
              width={90}
            />
            <Tooltip
              formatter={(value) => currencyFormatter.format(value)}
              labelFormatter={formatMonthLabel}
              contentStyle={{
                backgroundColor: "var(--background-color)",
                color: "var(--text-color)",
                border: "1px solid var(--tertiary-color)",
                borderRadius: "8px",
                fontSize: "0.85rem",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              }}
              labelStyle={{
                color: "var(--text-color)",
                fontWeight: 600,
              }}
              wrapperStyle={{
                outline: "none",
              }}
            />
            <Bar
              dataKey="total"
              fill="var(--accent-color)"
              isAnimationActive={true}
              animationDuration={1000}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default OverviewMonthlySpendingChart;
