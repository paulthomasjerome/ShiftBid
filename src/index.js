import React from "react";
import ReactDOM from "react-dom";
import UserView from "./Exp/UserView.js";
import ShiftItem from './Exp/ShiftItem.js';
const shifts = [<ShiftItem key='1'/>,<ShiftItem key='2'/>,<ShiftItem key='3'/>,<ShiftItem key='4'/>,<ShiftItem key='5'/>];
ReactDOM.render(<UserView shifts={shifts} />, document.getElementById("root"));
