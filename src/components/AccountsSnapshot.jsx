import data from "../data/account_balances_overview.json";

function AccountsSnapshot() {
  const tableHeaders = ["Institution", "Account Type", "Balance"];

  return (
    <div className="accounts-snapshot-grid-item" style={{ gridArea: "box-5" }}>
      <h2>Accounts Snapshot</h2>
      <table className="accounts-snapshot-table">
        <caption>Accounts</caption>
        <tr>
          {tableHeaders.map((header) => (
            <th>{header}</th>
          ))}
        </tr>
        {data.accounts.map((account) => (
          <tr className="tr-data-container">
            <td data-cell="date">{account.bank}</td>
            <td data-cell="account">{account.account_type}</td>
            <td data-cell="merchant">{account.balance}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default AccountsSnapshot;

{
  /* <ul className="list">
          <li className="list-item institution">
            {account.bank}
          </li>
          <li className="list-item name">
            {account.account_type}
          </li>
          <li className="list-item balance">
            CA$ {account.balance}
          </li>
        </ul> */
}
