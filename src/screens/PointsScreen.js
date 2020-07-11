import React from "react";
import PointsTable from "../components/PointsTable";
import pubg from "../images/pubg.jpg";
export const PointsScreen = () => {
  return (
    <div>
      <img width="100%" src={pubg} />

      <PointsTable />
    </div>
  );
};
