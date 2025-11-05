function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-upper">
        <div className="navbar-upper-start">
          <h1>Household Finance</h1>
          <p>All-in-one: spending, budgets, savings, goals, investments</p>
        </div>

        <div className="navbar-upper-end">
          <button className="button-add-transaction" type="button">
            + Add Transaction
          </button>
          <button className="button-light-mode" type="button">
            🌗
          </button>
        </div>
      </div>

      <div className="navbar-button-list">
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
            className="navbar-button"
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
