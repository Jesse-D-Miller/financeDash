function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-upper">
        <div className="navbar-upper-start">
          <h1>Household Finance</h1>
          <p>All-in-one: spending, budgets, savings, goals, investments</p>
        </div>

        <div className="navbar-upper-end">
          <button type="button">
            + Add Transaction
          </button>
          <button type="button">
            🌗
          </button>
        </div>
      </div>

      <div className="container-fluid justify-content-start">
        {[
          "Overview",
          "Spending",
          "Budget",
          "Goals",
          "Savings",
          "Investments",
          "Net Worth",
          "Bills",
          "Splitwise",
        ].map((label) => (
          <button
            key={label}
            className="btn btn-outline-success me-2"
            type="button"
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
