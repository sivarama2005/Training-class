import React, { useState } from "react";

function Calculator() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [op, setOp] = useState("");
  const [result, setResult] = useState("");

  const calc = () => {
    const num1 = Number(a);
    const num2 = Number(b);

    switch (op) {
      case "+":
        setResult(`Answer is: ${num1 + num2}`);
        break;
      case "-":
        setResult(`Answer is: ${num1 - num2}`);
        break;
      case "*":
        setResult(`Answer is: ${num1 * num2}`);
        break;
      case "/":
        setResult(`Answer is: ${num1 / num2}`);
        break;
      default:
        setResult("Not valid operator");
    }
  };

  return (
    <div
      style={{
        backgroundColor: "antiquewhite",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div style={{ transform: "scale(1.6)", textAlign: "center" }}>
        <h1>CALCULATOR</h1>

        <input
          type="number"
          placeholder="Enter a"
          value={a}
          onChange={(e) => setA(e.target.value)}
          style={{ textAlign: "center" }}
        />

        <input
          type="text"
          placeholder="Enter Operator"
          value={op}
          onChange={(e) => setOp(e.target.value)}
          style={{ textAlign: "center", margin: "0 10px" }}
        />

        <input
          type="number"
          placeholder="Enter b"
          value={b}
          onChange={(e) => setB(e.target.value)}
          style={{ textAlign: "center" }}
        />

        <br /><br />

        <button
          onClick={calc}
          style={{ backgroundColor: "aquamarine" }}
        >
          Calculate
        </button>

        <h2>{result}</h2>
      </div>
    </div>
  );
}

export default Calculator;
