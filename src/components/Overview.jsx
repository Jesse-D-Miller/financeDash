import SnapshotCard from "./SnapshotCard";
import AccountsSnapshot from "./AccountsSnapshot";
import NetWorthGraph from "./NetWorthGraph";
import OverviewCardCashTotal from "./OverviewCardCashTotal";

function Overview() {
  return (
    <div className="overview-grid">
      <OverviewCardCashTotal />
      <NetWorthGraph />
      <AccountsSnapshot />
    </div>
  );
}

export default Overview;
