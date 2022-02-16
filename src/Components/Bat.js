import React, { useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";

function Bat(props) {
  const bats = useSelector((state) => state.bat.bats);
  const dispatch = useDispatch();
  console.log("bat rerendered");
  return (
    <div>
      <h1>Bats : {bats}</h1>
      {/* <button onClick={()=>setBat(bat-1)}>Buy Bat</button> */}
      <button onClick={() => dispatch({ type: "BUY_BAT" })}>Buy Bat</button>
    </div>
  );
}

export default Bat;
