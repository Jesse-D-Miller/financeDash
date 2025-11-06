import SnapshotCard from "./SnapshotCard";
import AccountsSnapshot from "./AccountsSnapshot";
import NetWorthGraph from "./NetWorthGraph";

function Overview() {
  return (
    <div className="overview-grid">
      <SnapshotCard />
      <NetWorthGraph />
      <AccountsSnapshot />
    </div>
  );
}

export default Overview;
