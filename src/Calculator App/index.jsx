import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { add, sub, mul, div } from "./math-components.js";

function App() {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [status, setStatus] = useState("");
    const [statusColor, setStatusColor] = useState("black");
    const [showResults, setShowResults] = useState(false);

    const n1 = parseInt(input1);
    const n2 = parseInt(input2);

    function handleSubmit() {
        if (isNaN(n1) || isNaN(n2)) {
            setStatus("Please enter valid Integers!");
            setStatusColor("red");
            setShowResults(false);
            return;
        }
        if (n2 === 0) {                               // ✅ uses n2 directly
            setStatus("Warning: Division by zero is undefined!");
            setStatusColor("red");
        } else {
            setStatus("Calculations Processed Successfully!"); // ✅ typo fixed
            setStatusColor("green");
        }
        setShowResults(true);
    }

    const inputStyle = {
        width: "150px",
        border: "1px solid black",
        margin: "5px"
    };

    const statusStyle = {
        color: statusColor,
        fontSize: "30px",
    };

    const divStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh"
    };

    return (
        <div style={divStyle}>
            <input
                type="number"
                placeholder="Enter Number1 value: "
                value={input1}
                style={inputStyle}
                onChange={(e) => setInput1(e.target.value)}
            />
            <input
                type="number"
                placeholder="Enter Number2 value: "
                value={input2}
                style={inputStyle}
                onChange={(e) => setInput2(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
            {showResults && (                          // ✅ math only runs when valid
                <ul>
                    <li>Addition: {add(n1, n2)}</li>
                    <li>Subtraction: {sub(n1, n2)}</li>
                    <li>Multiplication: {mul(n1, n2)}</li>
                    <li>Division: {n2 === 0 ? "Undefined (÷ by 0)" : div(n1, n2)}</li>
                </ul>
            )}
            <h1 style={statusStyle}>{status}</h1>
        </div>
    );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);