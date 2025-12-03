import SnapshotCard from "./SnapshotCard";
import AccountsSnapshot from "./AccountsSnapshot";
import NetWorthGraph from "./NetWorthGraph";
import OverviewCardCashTotal from "./OverviewCardCashTotal";
import NetWorthCard from "./NetWorthCard";
import OverviewTopCategoriesCard from "./OverviewTopCategoryCard";
import SpendingPieChart from "./SpendingPieChart";
import OverviewInvestmentSnapshot from "./OverviewInvestmentSnapshot";
import OverviewMonthlySpendingChart from "./OverviewMonthlySpendingChart";

function Overview() {
  return (
    <div className="overview-grid">
      <OverviewCardCashTotal />
      <NetWorthCard />
      <OverviewTopCategoriesCard />
      <OverviewInvestmentSnapshot />
      <SpendingPieChart />
      <AccountsSnapshot />
      <OverviewMonthlySpendingChart />
    </div>
  );
}

export default Overview;
