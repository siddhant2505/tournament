import React, { useContext, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { GlobalContext } from "../contexts/GlobalState";

export const Match = () => {
  const [winpt, setWinpt] = useState({ win1: 0, lose1: 0, win2: 0, lose2: 0 });
  const [teamName, setTeamName] = useState({ teamName1: "", teamName2: "" });
  const { teams, addTransaction, updateTeam } = useContext(GlobalContext);
  const [score, setScore] = useState({ team1: "", team2: "" });
  const [win, setWin] = useState("");
  const [lose, setLose] = useState("");
  const handleInputChange = (e) => {
    const value = e.target.name;
    setScore({ ...score, [value]: +e.target.value });
  };
  const handleTeam = (e) => {
    setTeamName({ ...teamName, [e.target.name]: e.target.value });
  };
  const handleScore = () => {
    if (score.team1 < score.team2) {
      setWin("LOSE");
      setWinpt({ ...winpt, win2: 1, lose1: 1 });
      console.log(winpt);
      setLose("WIN");
    } else if (score.team1 === score.team2) {
      setWin("TIE");
      setLose("TIE");
    } else if (score.team1 > score.team2) {
      setWinpt({ ...winpt, win1: 1, lose2: 1 });
      setWin("WIN");
      setLose("LOSE");
    }
  };
  const handleSubmit = (e) => {
    handleScore();
    console.log(win, lose);
    const newTeam1 = {
      id: Math.random() * 100000000,
      name: teamName.teamName1,
      stats: {
        kills: score.team1,
        deaths: score.team2,
        played: +1,
        wins: winpt.win1,
        loses: winpt.lose1,
        tie: 0,
      },
    };
    const newTeam2 = {
      id: Math.random() * 100000000,
      name: teamName.teamName2,
      stats: {
        kills: score.team2,
        deaths: score.team1,
        played: +1,
        wins: winpt.win2,
        loses: winpt.lose2,
        tie: 0,
      },
    };
    updateTeam(newTeam1, teamName.teamName1);
    console.log(newTeam2);
    updateTeam(newTeam2, teamName.teamName2);
  };
  return (
    <Container>
      <Row>
        <Col>
          <h1 style={{ paddingTop: "40px" }}>MATCH DETAILS</h1>
        </Col>
      </Row>
      <Row style={{ margin: "3vw" }}>
        <Col>
          <h2>TEAM</h2>
        </Col>
        <Col style={{ textAlign: "right" }}>
          <div class="form-group">
            <label for="sel1">Select Team 1:</label>
            <select
              name="teamName1"
              value={teamName.teamName1}
              onChange={handleTeam}
              class="form-control btn-warning"
              id="sel1"
            >
              {teams.map((team) => {
                return <option value={team.name}>{team.name}</option>;
              })}
            </select>
          </div>

          {/* <Dropdown>
            <Dropdown.Toggle variant="warning" id="dropdown-basic">
              Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {teams.map((team) => {
                return (
                  <Dropdown.Item href="#/action-1">{team.name}</Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown> */}
        </Col>
        <Col>
          <h2 style={{ paddingTop: "20px" }}>V/S</h2>
        </Col>
        <Col style={{ textAlign: "left" }}>
          <div class="form-group">
            <label for="sel1">Select Team 2:</label>
            <select
              name="teamName2"
              value={teamName.teamName2}
              onChange={handleTeam}
              class="form-control btn-warning"
              id="sel1"
            >
              {teams.map((team) => {
                return <option value={team.name}>{team.name}</option>;
              })}
            </select>
          </div>
        </Col>
        <Col></Col>
      </Row>
      <Row style={{ margin: "3vw" }}>
        <Col>
          <h2>SCORE</h2>
        </Col>
        <Col>
          <InputGroup className="mb-3">
            <FormControl
              type="number"
              value={score.team1}
              name="team1"
              onChange={handleInputChange}
              placeholder="Kills"
              aria-label="Kills"
              aria-describedby="basic-addon1"
            />
          </InputGroup>{" "}
        </Col>
        <Col>
          <span
            style={{
              fontSize: "30px",
              color: "green",
              fontWeight: "bold",
              paddingRight: "30px",
            }}
          >
            {win}
          </span>
          <span style={{ fontSize: "30px", color: "red", fontWeight: "bold" }}>
            {lose}
          </span>{" "}
        </Col>
        <Col>
          {" "}
          <InputGroup className="mb-3">
            <FormControl
              type="number"
              value={score.team2}
              name="team2"
              onChange={handleInputChange}
              placeholder="Kills"
              aria-label="Kills"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Col>
        <Col>
          <Button variant="primary" onClick={handleSubmit}>
            SUBMIT
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
