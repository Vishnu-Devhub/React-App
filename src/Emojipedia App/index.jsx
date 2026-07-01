import React from "react";
import { createRoot } from "react-dom/client";
import contents from "./components/data.jsx";
import Card from "./components/cards.jsx";  

function App() {
    return (
        <div>
            {contents.map((emoji, index) => {
                    <Card key={index} {...emoji}/>
                })}
        </div>
    );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);