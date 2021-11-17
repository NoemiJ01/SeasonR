import React from "react";
import "./TableStyle.css";

function TableRow(props) {
  let rowStyle = {
    backgroundColor: "rgb(240, 240, 240)"
  };
  console.log(props);
  if (props.result == "w") {
    rowStyle.backgroundColor = "rgb(0, 255, 0)";
  }
  return (
    <div className="table-rows" style={rowStyle}>
      <div>{props.game}</div>
      <div>{props.opponent}</div>
      <div>{props.result}</div>
      <div>{props.location}</div>
      <div>{props.teamScore}</div>
      <div>{props.opponentScore}</div>
      <div>{props.wins}</div>
      <div>{props.losses}</div>
    </div>
  );
}

export default TableRow;
