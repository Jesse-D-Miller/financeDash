import data from "../data/account_balances_overview.json";

function AccountsSnapshot() {
  const tableHeaders = ["Institution", "Account Type", "Balance"];

  return (
    <div className="accounts-snapshot-grid-item" style={{ gridArea: "box-5" }}>
      <h2>Accounts Snapshot</h2>
      <table>
        <caption>Accounts</caption>
        <tr>
          {tableHeaders.map((header) => (
            <th>{header}</th>
          ))}
        </tr>
        {data.accounts.map((account) => (
          <tr className="tr-data-container">
            <td data-cell="institution">{account.bank}</td>
            <td data-cell="account-type">{account.account_type}</td>
            <td data-cell="balance">{account.balance}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default AccountsSnapshot;
