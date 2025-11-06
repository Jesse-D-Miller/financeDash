function SnapshotCard() {
  const insights = [
    {
      id: 1,
      title: "💲Cash & Savings",
      amount: "CA$ 15,500.00",
      source: "HISA + Chequing",
    },
    {
      id: 2,
      title: "📈Investments",
      amount: "CA$ 55,550.00",
      source: "TFSA + RRSP",
    },
    {
      id: 3,
      title: "🏠Debts",
      amount: "-CA$ 413,000.00",
      source: "Credit + Mortgage",
    },
    {
      id: 4,
      title: "🎯Net Worth",
      amount: "-CA$ 341,950.00",
      source: "Assets - Liabilities",
    },
  ];

  return (
    <div className="grid-card-container" style={{ gridArea: "box-1" }}>
      {insights.map((item) => (
        <div key={item.id} className="card-account-snapshot">
          <div>{item.title}</div>
          <div>
            <p>{item.amount}</p>
            <p>{item.source}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SnapshotCard;
