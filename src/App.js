import React from "react";
import "./App.css";
import PointsTable from "./components/PointsTable";
import { GlobalProvider } from "./contexts/GlobalState";
import { PointsScreen } from "./screens/PointsScreen";
import { Match } from "./components/Match";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Match />
        <PointsTable />
      </div>
    </GlobalProvider>
  );
}

export default App;
