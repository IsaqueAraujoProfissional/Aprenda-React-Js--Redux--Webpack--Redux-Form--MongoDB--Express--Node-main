import React from "react";
import ReactDOM from "react-dom";
import Family from "./family";
import Member from "./member";

ReactDOM.render(
   <Family lastName='Araújo'>
      <Member name='Isaque'></Member>
      <Member name='Izael'></Member>
   </Family>
   , document.getElementById("app")
)