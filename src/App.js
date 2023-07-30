import React, { useState } from "react";
import "./styles.css";

import Values from "values.js";

export default function App() {
  const [color, setcolor] = useState("");
  const [error, seterror] = useState(false);
  const [list, setlist] = useState([]);

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(color);
    console.log(color.all(10));
  };

  return (
    <div className="generator">
      <h3>Color Generator : </h3>
      <div className="box"> </div>
      <form onSubmit={handlesubmit}>
        <input onChange={(e) => setcolor(e.target.value)} type="text"></input>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}
