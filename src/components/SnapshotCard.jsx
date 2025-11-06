function SnapshotCard() {
  const insights = [
    {
      title: "💲Cash & Savings",
      amount: "CA$ 15,500.00",
      source: "HISA + Chequing",
    },
    {
      title: "📈Investments",
      amount: "CA$ 55,550.00",
      source: "TFSA + RRSP",
    },
    {
      title: "🏠Debts",
      amount: "-CA$ 413,000.00",
      source: "Credit + Mortgage",
    },
    {
      title: "🎯Net Worth",
      amount: "-CA$ 341,950.00",
      source: "Assets - Liabilities",
    },
  ];

  return (
    <div className="grid-card-container">
      {insights.map((item) => (
        <div className="card-account-snapshot">
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
