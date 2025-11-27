import BMOTransactions from "../data/credit/bmo_mock_transactions.json";
import TangerineTransactions from "../data/credit/tangerine_mock_transactions.json";
import TDTransactions from "../data/credit/td_mock_transactions.json"

function OverviewTopCategoriesCard() {
//filter all ccs for if Month -> category as object key -> amount and add to object.value

//combine all transactionsinto one array
const allTransactions = [
  ...BMOTransactions,
  ...TangerineTransactions,
  ...TDTransactions,
]

//find transaction with most recent posted date
const mostRecentTransaction = allTransactions.reduce((latest, tx) => {
  if (!latest) return tx; //first item by default

  const latestDate = new Date(latest.date);
  const currentDate = new Date(tx.date);

  return currentDate > latestDate ? tx : latest;
}, null);

console.log(mostRecentTransaction.date);

//extract mostRecentTransaction year and month from yyyy-mm-dd


  return (
    <div className="card-account-snapshot" style={{ gridArea: "box-3" }}>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e3e3e3"
        >
          <path d="m260-520 220-360 220 360H260ZM700-80q-75 0-127.5-52.5T520-260q0-75 52.5-127.5T700-440q75 0 127.5 52.5T880-260q0 75-52.5 127.5T700-80Zm-580-20v-320h320v320H120Zm580-60q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm-500-20h160v-160H200v160Zm202-420h156l-78-126-78 126Zm78 0ZM360-340Zm340 80Z" />
        </svg>
        <h7>Top Category</h7>
      </div>
      <div>
        <p>{}</p>
        <h7>CA$ {} ototal</h7>
      </div>
    </div>
  );
}

export default OverviewTopCategoriesCard;
