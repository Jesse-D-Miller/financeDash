import NavBar from "./components/Navbar";
import Overview from "./components/Overview";
import useLocalStorage from "use-local-storage";
import Transactions from "./components/Transactions";
import CSVFileConverter from "./components/CSVFileConverter";

function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="main-div" data-theme={theme}>
      <NavBar switchTheme={switchTheme} />
      <h6>OVERVIEW</h6>
      <Overview />
      <h6>TRANSACTIONS</h6>
      <Transactions />
      <h6>FILE CONVERTER: CSV TO JSON</h6>
      <CSVFileConverter />
    </div>
  );
}

export default App;
