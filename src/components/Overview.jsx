import SnapshotCard from "./SnapshotCard";
import AccountsSnapshot from "./AccountsSnapshot";
import NetWorthGraph from "./NetWorthGraph";
import OverviewCardCashTotal from "./OverviewCardCashTotal";
import NetWorthCard from "./NetWorthCard";

function Overview() {
  return (
    <div className="overview-grid">
      <OverviewCardCashTotal />
      <NetWorthCard />
      <NetWorthGraph />
      <AccountsSnapshot />
    </div>
  );
}

export default Overview;
