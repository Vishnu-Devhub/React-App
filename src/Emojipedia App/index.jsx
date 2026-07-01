import React from "react";
import { createRoot } from "react-dom/client";
import contents from "./components/data.js";
import Card from "./components/cards.jsx";  

function App() {
    return (
        <div className="grid-layout">
            {contents.map((emoji, index) => (
                <Card key={index} {...emoji}/>
            ))}
        </div>
    );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);