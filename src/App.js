import React from "react";
// Be sure to uncomment the TableRow component import before using a TableRow
import TableRow from "./components/TableRow.js";
import TableHeader from "./components/TableHeader.js";
import Navbar from "./components/Navbar.js";
// Be sure to uncomment the line importing the data before using it!
import data from "./knicks-data.js";
import "./App.css";

console.log(data[0]);

function App() {
  let divStyle = {
    backgroundColor: "rgb(0,0,255)",
    minHeight: "100vh"
  };
  return (
    <div className="App" style={divStyle}>
      <Navbar />
      <TableHeader />
      <TableRow
        game={data[0].Game}
        opponent={data[0].Opponent}
        result={data[0].Result}
        location={data[0].location}
        teamScore={data[0].TeamScore}
        opponentScore={data[0].OpponentScore}
        wins={data[0].Wins}
        losses={data[0].L}
      />
      <TableRow
        game={data[1].Game}
        opponent={data[1].Opponent}
        result={data[1].Result}
        location={data[1].location}
        teamScore={data[1].TeamScore}
        opponentScore={data[1].OpponentScore}
        wins={data[1].Wins}
        losses={data[1].L}
      />
      <TableRow
        game={data[2].Game}
        opponent={data[2].Opponent}
        result={data[2].Result}
        location={data[2].location}
        teamScore={data[2].TeamScore}
        opponentScore={data[2].OpponentScore}
        wins={data[2].Wins}
        losses={data[2].L}
      />
      <TableRow
        game={data[3].Game}
        opponent={data[3].Opponent}
        result={data[3].Result}
        location={data[3].location}
        teamScore={data[3].TeamScore}
        opponentScore={data[3].OpponentScore}
        wins={data[3].Wins}
        losses={data[3].L}
      />
      <TableRow
        game={data[4].Game}
        opponent={data[4].Opponent}
        result={data[4].Result}
        location={data[4].location}
        teamScore={data[4].TeamScore}
        opponentScore={data[4].OpponentScore}
        wins={data[4].Wins}
        losses={data[4].L}
      />
      <TableRow
        game={data[5].Game}
        opponent={data[5].Opponent}
        result={data[5].Result}
        location={data[5].location}
        teamScore={data[5].TeamScore}
        opponentScore={data[5].OpponentScore}
        wins={data[5].Wins}
        losses={data[5].L}
      />
      <TableRow
        game={data[6].Game}
        opponent={data[6].Opponent}
        result={data[6].Result}
        location={data[6].location}
        teamScore={data[6].TeamScore}
        opponentScore={data[6].OpponentScore}
        wins={data[6].Wins}
        losses={data[6].L}
      />
      <TableRow
        game={data[7].Game}
        opponent={data[7].Opponent}
        result={data[7].Result}
        location={data[7].location}
        teamScore={data[7].TeamScore}
        opponentScore={data[7].OpponentScore}
        wins={data[7].Wins}
        losses={data[7].L}
      />
      <TableRow
        game={data[8].Game}
        opponent={data[8].Opponent}
        result={data[8].Result}
        location={data[8].location}
        teamScore={data[8].TeamScore}
        opponentScore={data[8].OpponentScore}
        wins={data[8].Wins}
        losses={data[8].L}
      />
      <TableRow
        game={data[9].Game}
        opponent={data[9].Opponent}
        result={data[9].Result}
        location={data[9].location}
        teamScore={data[9].TeamScore}
        opponentScore={data[9].OpponentScore}
        wins={data[9].Wins}
        losses={data[9].L}
      />
      <TableRow
        game={data[10].Game}
        opponent={data[10].Opponent}
        result={data[10].Result}
        location={data[10].location}
        teamScore={data[10].TeamScore}
        opponentScore={data[10].OpponentScore}
        wins={data[10].Wins}
        losses={data[10].L}
      />
    </div>
  );
}

export default App;
