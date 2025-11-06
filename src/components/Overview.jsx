import SnapshotCard from "./SnapshotCard";
import AccountsSnapshot from "./AccountsSnapshot";

function Overview() {
  return (
    <div className="overview-grid">
      <SnapshotCard />
      <AccountsSnapshot />
    </div>
  );
}

export default Overview;
