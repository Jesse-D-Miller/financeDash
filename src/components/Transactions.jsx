function Transactions() {
  const seedTransactions = [
    {
      id: 1,
      date: "2025-10-05",
      accountId: "acc-jn-001",
      owner: "Joint",
      description: "Costco groceries",
      amount: -210.5,
      category: "Groceries",
      type: "expense",
      shared: true,
    },
    {
      id: 2,
      date: "2025-10-09",
      accountId: "acc-rc-cc1",
      owner: "Rachel",
      description: "Dinner out",
      amount: -82.1,
      category: "Dining",
      type: "expense",
      shared: true,
    },
    {
      id: 3,
      date: "2025-10-12",
      accountId: "acc-jc-cc1",
      owner: "Jesse",
      description: "Gas - Shell",
      amount: -70,
      category: "Transport",
      type: "expense",
      shared: true,
      jesseShare: 0.6,
      wifeShare: 0.4,
    },
    {
      id: 4,
      date: "2025-10-15",
      accountId: "acc-jn-001",
      owner: "Joint",
      description: "Hydro bill",
      amount: -120,
      category: "Utilities",
      type: "expense",
      shared: true,
    },
    {
      id: 5,
      date: "2025-10-25",
      accountId: "acc-jc-001",
      owner: "Jesse",
      description: "Paycheque",
      amount: 2800,
      category: "Income",
      type: "income",
      shared: false,
    },
    {
      id: 6,
      date: "2025-10-26",
      accountId: "acc-jc-001",
      owner: "Jesse",
      description: "Settlement to Rachel",
      amount: -40,
      category: "Transfers",
      type: "settlement",
      shared: true,
    },
    {
      id: 7,
      date: "2025-10-28",
      accountId: "acc-rc-001",
      owner: "Rachel",
      description: "Paycheque",
      amount: 2600,
      category: "Income",
      type: "income",
      shared: false,
    },
    {
      id: 8,
      date: "2025-11-01",
      accountId: "acc-jn-001",
      owner: "Joint",
      description: "Mortgage payment",
      amount: -2200,
      category: "Home",
      type: "expense",
      shared: true,
    },
  ];

  return (
    <div>
      <h4>✅ All Transactions</h4>
      <div>

        {seedTransactions.map((transaction) => (

          <div key={transaction.id} id="transaction-list">
            <div></div>
          </div>

        ))}

      </div>
    </div>
  );
}

export default Transactions;
