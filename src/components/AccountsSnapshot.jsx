function AccountsSnapshot() {
  const accounts = [
  { id: "chk", name: "Chequing", type: "cash", institution: "RBC", balance: 2850 },
  { id: "sav", name: "High-Interest Savings", type: "savings", institution: "EQ", balance: 12650 },
  { id: "tfsa", name: "TFSA Index", type: "investment", institution: "Wealthsimple", balance: 21400 },
  { id: "rrsp", name: "RRSP", type: "investment", institution: "Wealthsimple", balance: 34150 },
  { id: "cc1", name: "Visa (J)", type: "credit", institution: "RBC", balance: -620 },
  { id: "cc2", name: "MC (W)", type: "credit", institution: "Tangerine", balance: -380 },
  { id: "mort", name: "Mortgage", type: "liability", institution: "BMO", balance: -412000 },
];

  return (
    <div className="d-flex justify-content-center">
      <div className="card w-50 bg-success-subtle">
        <div className="card-header">Accounts Snapshot</div>
        <div className="col">
            {accounts.map((account) => (
          <ul className="list-group list-group-flush flex-row justify-content-between">
              <li className="list-group-item bg-success-subtle justify-content-start">{account.institution}</li>
              <li className="list-group-item bg-success-subtle justify-content-start">{account.name}</li>
              <li className="list-group-item bg-success-subtle justify-content-end">CA${account.balance}</li>
          </ul>
            ))}
        </div>
      </div>
    </div>
  );
}

export default AccountsSnapshot;
