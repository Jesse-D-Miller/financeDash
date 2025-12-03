import data from "../data/account_balances_overview.json";

function OverviewInvestmentSnapshot() {
  const investmentAccounts = data.accounts.filter(
    (account) => account.account_type === "RRSP" || account.account_type === "TFSA"
  );

  const investmentTotal = investmentAccounts.reduce(
    (sum, account) => sum + account.balance,
    0
  );

  const currencyFormatter = new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: "CAD",
  });

  return (
    <div className="card-account-snapshot" style={{ gridArea: "box-2" }}>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e3e3e3"
        >
          <path d="M280-160v-86.67h-80v-466.66h80V-800h66.67v86.67h80v466.66h-80V-160H280Zm-13.33-153.33H360v-333.34h-93.33v333.34ZM613.33-160v-206.67h-80v-266.66h80V-800H680v166.67h80v266.66h-80V-160h-66.67ZM600-433.33h93.33v-133.34H600v133.34ZM313.33-480Zm333.34-20Z" />
        </svg>
        <h7>Total Investments</h7>
      </div>
      <div>
        <p>{currencyFormatter.format(investmentTotal)}</p>
        <h7>TFSA + RRSP</h7>
      </div>
    </div>
  );
}

export default OverviewInvestmentSnapshot;
