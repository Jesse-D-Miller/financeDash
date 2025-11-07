import NavBar from "./components/Navbar";
import Overview from "./components/Overview";
import React from "react";
import useLocalStorage from "use-local-storage";
import Transactions from "./components/Transactions";

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
    </div>
  );
}

export default App;
