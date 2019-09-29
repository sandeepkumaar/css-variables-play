import React from "react";

//import style from "./style.css";

module.exports = function App() {
  return (
    <div className="container">

      <div className="">
        <h4>col</h4>
        <div className="flex flex-col">
          <p>sandeep </p>
          <p>navin kumar</p>
          <p>nalina </p>
          <p>chandrasekar </p>
        </div>
      </div>

      <div className="">
        <h4>row</h4>
        <div className="flex">
          <p>sandeep </p>
          <p>navin kumar</p>
          <p>nalina </p>
          <p>chandrasekar </p>
        </div>
      </div>

    </div>
  );
}
