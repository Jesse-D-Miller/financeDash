import SnapshotCard from "./SnapshotCard";
import AccountsSnapshot from "./AccountsSnapshot";
import NetWorthGraph from "./NetWorthGraph";
import OverviewCardCashTotal from "./OverviewCardCashTotal";
import NetWorthCard from "./NetWorthCard";
import OverviewTopCategoriesCard from "./OverviewTopCategoryCard";
import SpendingPieChart from "./SpendingPieChart";

function Overview() {
  return (
    <div className="overview-grid">
      <OverviewCardCashTotal />
      <NetWorthCard />
      <OverviewTopCategoriesCard />
      <SpendingPieChart />
      <AccountsSnapshot />
    </div>
  );
}

export default Overview;
