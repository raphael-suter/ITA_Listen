import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const aufgabe1 = ["red", "green", "blue"];

  const aufgabe2 = [
    { title: "red", red: 255, green: 0, blue: 0, html: "#FF0000" },
    { title: "green", red: 0, green: 255, blue: 0, html: "#00FF00" },
    { title: "blue", red: 0, green: 0, blue: 255, html: "#0000FF" },
  ];

  const [aufgabe4Array, setAufgabe4Array] = useState([]);
  const [aufgabe4Input, setAufgabe4Input] = useState("");

  const onClick = () => {
    const getRandomValue = () => {
      const { floor, random } = Math;
      return floor(random() * 255);
    };

    setAufgabe4Array([
      ...aufgabe4Array,
      {
        title: aufgabe4Input,
        red: getRandomValue(),
        green: getRandomValue(),
        blue: getRandomValue(),
      },
    ]);

    setAufgabe4Input("");
  };

  return (
    <>
      <h1>Aufgabe 1</h1>
      <ul>
        {aufgabe1.map((color, index) => (
          <li key={`color-${index}`}>{color}</li>
        ))}
      </ul>
      <h1>Aufgabe 2</h1>
      <ul>
        {aufgabe2.map(({ title, red, green, blue }, index) => (
          <li
            key={`color-${index}`}
          >{`${title} (${red}, ${green}, ${blue})`}</li>
        ))}
      </ul>
      <h1>Aufgabe 3</h1>
      <ul>
        {aufgabe2.map(({ title, red, green, blue, html }, index) => (
          <li
            key={`color-${index}`}
            style={{ color: html }}
          >{`${title} (${red}, ${green}, ${blue})`}</li>
        ))}
      </ul>
      <h1>Aufgabe 4</h1>
      <ul>
        {aufgabe4Array.map(({ title, red, green, blue }, index) => (
          <li
            key={`color-${index}`}
            style={{ color: `rgb(${red}, ${green}, ${blue})` }}
          >{`${title} (${red}, ${green}, ${blue})`}</li>
        ))}
      </ul>
      <input
        type="text"
        value={aufgabe4Input}
        onChange={(evt) => setAufgabe4Input(evt.target.value)}
      />
      <button onClick={onClick}>GO</button>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
