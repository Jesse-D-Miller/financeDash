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
    <div class="d-flex justify-content-center row mb-3">
      {insights.map((item) => (
        <div class="card w-75 m-3 bg-success-subtle">
          <div class="card-header">{item.title}</div>
          <div class="card-body">
            <figure>
              <blockquote class="blockquote">
                <p>{item.amount}</p>
              </blockquote>
              <figcaption class="blockquote-footer">{item.source}</figcaption>
            </figure>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SnapshotCard;
