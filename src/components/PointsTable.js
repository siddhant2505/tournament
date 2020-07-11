import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";
import Table from "react-bootstrap/Table";
import pubg from "../images/pubg.jpg";

const PointsTable = () => {
  const { teams } = useContext(GlobalContext);

  return (
    // <div style={{ position: "absolute", right: "2%", top: "10%" }}>
    <div>
      <h1
        style={{
          color: "rgb(255,240,255,0.9)",
          fontSize: "3.947vw",
          textAlign: "left",
        }}
      >
        POINTS TABLE
      </h1>
      <h1 style={{ fontSize: "2vw", color: "rgb(255,240,255,0.9)" }}>
        &lt; Group A &gt;
      </h1>
      <Table striped bordered hover>
        <thead>
          <tr
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.6)",
              height: "3.289vw",
            }}
          >
            <th style={{ width: "3.947vw" }}>#</th>
            <th className="th" style={{ width: "13.158vw" }}>
              Team Name
            </th>
            <th className="th" style={{ width: "3.947vw" }}>
              Played
            </th>
            <th className="th" style={{ width: "3.947vw" }}>
              Won
            </th>
            <th className="th" style={{ width: "3.947vw" }}>
              Lose
            </th>
            <th className="th" style={{ width: "3.947vw" }}>
              Tie
            </th>
            <th className="th" style={{ width: "3.947vw" }}>
              Kills
            </th>
            <th className="th" style={{ width: "3.947vw" }}>
              Deaths
            </th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => {
            return (
              <tr
                style={{
                  lineHeight: "6.579vw",
                  minHeight: "6.579vw",
                  height: "6.579vw",
                }}
                className="table-row"
              >
                <td>#{team.id}</td>
                <td>{team.name}</td>
                <td>{team.stats.played}</td>
                <td>{team.stats.wins}</td>
                <td>{team.stats.loses}</td>
                <td>{team.stats.tie}</td>
                <td>{team.stats.kills}</td>
                <td>{team.stats.deaths}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
export default PointsTable;
