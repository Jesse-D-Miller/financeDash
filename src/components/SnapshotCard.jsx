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
    <div className="d-flex justify-content-center row mb-3">
      {insights.map((item) => (
        <div className="card w-75 m-3 bg-success-subtle">
          <div className="card-header">{item.title}</div>
          <div className="card-body">
            <figure>
              <blockquote className="blockquote">
                <p>{item.amount}</p>
              </blockquote>
              <figcaption className="blockquote-footer">{item.source}</figcaption>
            </figure>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SnapshotCard;
