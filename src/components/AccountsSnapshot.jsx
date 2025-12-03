import data from "../data/account_balances_overview.json";

function AccountsSnapshot() {
  const tableHeaders = ["Institution", "Account Type", "Balance"];

  return (
    <div className="accounts-snapshot-grid-item" style={{ gridArea: "box-5" }}>
      <div className="card-title-with-svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="40px"
          viewBox="0 -960 960 960"
          width="40px"
          fill="#e3e3e3"
        >
          <path d="M208-254v-319.33h66.67V-254H208Zm241.33 0v-319.33H516V-254h-66.67ZM80-120.67v-66.66h800v66.66H80ZM685.33-254v-319.33H752V-254h-66.67ZM80-640v-62l400-218.67L880-702v62H80Zm148.67-66.67h502.66-502.66Zm0 0h502.66L480-844.67l-251.33 138Z" />
        </svg>
        <h2>Accounts Snapshot</h2>
      </div>
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
