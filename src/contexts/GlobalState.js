import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  teams: [
    {
      id: 1,
      name: "Hunter's",
      stats: {
        kills: 0,
        deaths: 0,
        played: 0,
        wins: 0,
        loses: 0,
        tie: 0,
      },
    },
    {
      id: 2,
      name: "Fnatic",
      stats: { kills: 0, deaths: 0, played: 0, wins: 0, loses: 0, tie: 0 },
    },
    {
      id: 3,
      name: "MegaStars",
      stats: { kills: 0, deaths: 0, played: 0, wins: 0, loses: 0, tie: 0 },
    },
    {
      id: 4,
      name: "Devils",
      stats: { kills: 0, deaths: 0, played: 0, wins: 0, loses: 0, tie: 0 },
    },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  function addTransaction(team) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: team,
    });
  }
  function updateTeam(team, name) {
    // const updatedTeams = [...initialState.teams];
    // const updatedTeamIndex = updatedTeams.findIndex(
    //   (team) => team.name === name
    // );
    // const updatedTeam = {
    //   ...updatedTeams[updatedTeamIndex],
    // };
    // updatedTeam.stats.played++;
    // updatedTeam.stats.kills = team.stats.kills;
    // updatedTeam.stats.deaths = team.stats.deaths;
    // updatedTeam.stats.wins++;
    // updatedTeam.stats.loses++;
    // updatedTeams[updatedTeamIndex] = updatedTeam;
    const teamss = [...initialState.teams];
    console.log(teamss);
    dispatch({
      type: "UPDATE_MATCH",
      payload: { team, name, teamss },
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        teams: state.teams,
        deleteTransaction,
        addTransaction,
        updateTeam,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
