export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        teams: state.teams.filter((team) => team.id !== action.payload),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        teams: [action.payload, ...state.teams],
      };
    case "UPDATE_MATCH":
      const updatedTeams = [...action.payload.teamss];
      const updatedTeamIndex = updatedTeams.findIndex(
        (team) => team.name === action.payload.name
      );
      const updatedTeam = updatedTeams[updatedTeamIndex];
      updatedTeam.stats.played++;
      updatedTeam.stats.kills += action.payload.team.stats.kills;
      updatedTeam.stats.deaths += action.payload.team.stats.deaths;
      updatedTeam.stats.wins += action.payload.team.stats.wins;
      updatedTeam.stats.loses += action.payload.team.stats.loses;
      console.log(updatedTeam);
      updatedTeams[updatedTeamIndex] = updatedTeam;

      return {
        ...state,
        teams: updatedTeams,
        // teams: [
        //   state.teams.filter((team) => team.name !== action.payload.name),
        //   action.payload.team,
        // ],
        // ...state,
        // teams: [action.payload.team, ...state.teams],
      };
    default:
      return state;
  }
};
