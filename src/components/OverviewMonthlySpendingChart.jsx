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
    if (transaction.amount < 0) continue;

    const amount = transaction.amount;
    const date = transaction.date.slice(0, 7);

    spendByMonth[date] = (spendByMonth[date] || 0) + amount;
  }

  //map the object into an array of objects
  let spendByMonthArray = [];
  for (let key in spendByMonth) {
    spendByMonthArray.push({ month: key, total: spendByMonth[key] });
  }

  //sort array ascending
  let sortedAscendingSpendByMonthArray = spendByMonthArray.sort((a, b) => {
    if (a.month < b.month) {
      return -1;
    } else if (a.month > b.month) {
      return 1;
    } else {
      return 0;
    }
  });

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
  <BarChart width="100%" height={270} data={mostRecent12}>
    <XAxis dataKey="month" />
    <YAxis tickFormatter={(value) => currencyFormatter.format(value)} />
    <Tooltip
      formatter={(value) => currencyFormatter.format(value)}
      labelFormatter={(label) => `Month: ${label}`}
    />
    <Bar dataKey="total" fill="var(--accent-color)" />
  </BarChart>
</div>

    </div>
  );
}

export default OverviewMonthlySpendingChart;
