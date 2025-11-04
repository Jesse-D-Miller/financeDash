function NavBar() {
  return (
    <>
      <div className="row align-items-center mb-3">
        <div className="col">
          <h1>Household Finance</h1>
          <p>All-in-one: spending, budgets, savings, goals, investments</p>
        </div>
        <div className="col text-end">
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn btn-primary me-md-2" type="button">
              Login
            </button>
            <button className="btn btn-outline-primary" type="button">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand bg-body-tertiary">
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
    </>
  );
}

export default NavBar;
