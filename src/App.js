/* eslint-disable no-eval */
/* eslint-disable eqeqeq */
import React from "react";

function App() {
  const [inputs, setInputs] = React.useState("");
  const [display, setDisplay] = React.useState("");
  const [operation, setOperation] = React.useState("");

  const handleClick = (text) => {
    console.log({ text });
    if (text == "+/-") {
      //
    } else if (text == "%") {
      const result = display / 100;
      setDisplay(result);
    } else if (text == "AC") {
      setInputs("");
      setDisplay("");
    } else if (text == "x") {
      setInputs(display);
      setOperation("*");
      setDisplay(text);
    } else if (text == "÷") {
      setInputs(display);
      setOperation("/");
      setDisplay(text);
    } else if (text == "+" || text == "-") {
      setInputs(display);
      setOperation(text);
      setDisplay(text);
    } else if (text == "=") {
      console.log({ inputs, operation, display });
      const result = eval(inputs + operation + display);
      setDisplay(result || "");
    } else {
      if (
        display == "%" ||
        display == "0" ||
        display == "+" ||
        display == "-" ||
        display == "÷" ||
        display == "x"
      ) {
        setDisplay("");
      }
      setDisplay((state) => state + text);
    }
  };

  return (
    <div className="App">
      <div className="main">
        <div className="displaySection">{display}</div>
        <div>
          <div className="buttonRow">
            {["AC", "+/-", "%", "÷"].map((item, index) => (
              <div
                key={index}
                className={`btn ${item == "÷" && "ops"}`}
                onClick={() => handleClick(item)}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="buttonRow">
            {["7", "8", "9", "x"].map((item, index) => (
              <div
                key={index}
                className={`btn ${item == "x" && "ops"}`}
                onClick={() => handleClick(item)}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="buttonRow">
            {["4", "5", "6", "-"].map((item, index) => (
              <div
                key={index}
                className={`btn ${item == "-" && "ops"}`}
                onClick={() => handleClick(item)}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="buttonRow">
            {["1", "2", "3", "+"].map((item, index) => (
              <div
                key={index}
                className={`btn ${item == "+" && "ops"}`}
                onClick={() => handleClick(item)}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="buttonRow">
            {["0", ".", "="].map((item, index) => (
              <div
                key={index}
                className={`btn ${item == 0 && "zero"} ${item == "=" && "ops"}`}
                onClick={() => handleClick(item)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
