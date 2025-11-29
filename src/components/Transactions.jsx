import BMOTransactions from "../data/credit/bmo_mock_transactions.json";
import TangerineTransactions from "../data/credit/tangerine_mock_transactions.json";
import TDTransactions from "../data/credit/td_mock_transactions.json";
import BMOChequing from "../data/chequing/bmo_chequing_transactions.json";
import BMOSavings from "../data/saving/bmo_savings_transactions.json";

function Transactions() {
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

  //sort all transaction data from most recent to oldest
  const sortedByNewest = allTransactions.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  const mostRecent10 = sortedByNewest.slice(0, 10);

  return (
    <div className="recent-transaction-container">
      <h2>Recent Transactions</h2>
      <table>
        <caption>Recent Transactions</caption>
        <tr>
          {tableHeaders.map((header) => (
            <th>{header}</th>
          ))}
        </tr>

        {mostRecent10.map((transaction) => (
          <tr className="tr-data-container">
            <td data-cell="date">{transaction.date}</td>
            <td data-cell="account">{transaction.account_label}</td>
            <td data-cell="merchant">{transaction.merchant}</td>
            <td data-cell="description">{transaction.description}</td>
            <td data-cell="category">{transaction.category}</td>
            <td data-cell="amount">{transaction.amount}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Transactions;
