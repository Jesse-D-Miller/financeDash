import data from "../data/account_balances_overview.json";

function AccountsSnapshot() {

  return (
    <div className="accounts-snapshot-grid-item" style={{ gridArea: "box-5" }}>
      <h2>Accounts Snapshot</h2>

      {data.accounts.map((account) => (
        <ul className="list">
          <li className="list-item institution">
            {account.bank}
          </li>
          <li className="list-item name">
            {account.account_type}
          </li>
          <li className="list-item balance">
            CA$ {account.balance}
          </li>
        </ul>
      ))}
    </div>
  );
}

export default AccountsSnapshot;
