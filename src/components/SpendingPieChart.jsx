import BMOTransactions from "../data/credit/bmo_mock_transactions.json";
import TangerineTransactions from "../data/credit/tangerine_mock_transactions.json";
import TDTransactions from "../data/credit/td_mock_transactions.json";
import BMOChequing from "../data/chequing/bmo_chequing_transactions.json";
import BMOSavings from "../data/saving/bmo_savings_transactions.json";

function SpendingPieChart() {
  const tableHeaders = [
    "Date",
    "Account",
    "Merchant",
    "Description",
    "Category",
    "Amount",
  ];

  //combine all transactionsinto one array
  const allTransactions = [
    ...BMOTransactions,
    ...TangerineTransactions,
    ...TDTransactions,
    ...BMOChequing,
    ...BMOSavings,
  ];

  return (
    <div className="pie-chart-container" style={{ gridArea: "box-6" }}>
      <h1>Category Breakdown</h1>
    </div>
  );
}

export default SpendingPieChart;
