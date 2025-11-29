import BMOTransactions from "../data/credit/bmo_mock_transactions.json";
import TangerineTransactions from "../data/credit/tangerine_mock_transactions.json";
import TDTransactions from "../data/credit/td_mock_transactions.json";

function OverviewTopCategoriesCard() {
  //combine all transactionsinto one array
  const allTransactions = [
    ...BMOTransactions,
    ...TangerineTransactions,
    ...TDTransactions,
  ];

  //find transaction with most recent posted date
  const mostRecentTransaction = allTransactions.reduce((latest, tx) => {
    if (!latest) return tx; //first item by default

    const latestDate = new Date(latest.date);
    const currentDate = new Date(tx.date);

    return currentDate > latestDate ? tx : latest;
  }, null);

  console.log(mostRecentTransaction.date);

  //extract mostRecentTransaction year and month from yyyy-mm-dd
  const mostRecentDate = new Date(mostRecentTransaction.date);
  const targetYear = mostRecentDate.getFullYear(); //2025
  const targetMonth = mostRecentDate.getMonth(); //0-11, so 10 is november

  //we only want to keep transactions where targetYear and targetMonth match so we will filter using these constants
  //latest months transactions should reset whenever a more recent month is posted
  const latestMonthsTransactions = allTransactions.filter((tx) => {
    const filteredDate = new Date(tx.date);
    return (
      filteredDate.getFullYear() === targetYear &&
      filteredDate.getMonth() === targetMonth
    );
  });

  //test where we should see only most recent months transactions
  console.log(latestMonthsTransactions.map((tx) => tx.date));

  //take latest months transactions and sort them into an object by category. if key doesn't exist, create it and add amount. if key exists, add amount to total
  const spendByCategory = {};
  for (let transaction of latestMonthsTransactions) {
    //this skips credit and payments so we only consider spending habits
    if (transaction.amount < 0) continue;

    const category = transaction.category;

    spendByCategory[category] = (spendByCategory[category] || 0) + transaction.amount;
  }

  //now grab the top category and total amount spent on that category from the object
  let topCategory = "";
  let topCategoryAmount = 0;

  //this object only holds 1 months spending so it should iterate quickly
  for (let category in spendByCategory) {
    const amount = spendByCategory[category];

    if (amount > topCategoryAmount) {
      topCategoryAmount = amount; //category to display
      topCategory = category; //spending to display
    }
  }

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
        <p>{topCategory}</p>
        <h7>CA ${topCategoryAmount} total</h7>
      </div>
    </div>
  );
}

export default OverviewTopCategoriesCard;
