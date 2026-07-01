import React from "react";
import { createRoot } from "react-dom/client";
import Card from "./components/cards.jsx";        
import details from "./components/contact_details.js";

function App() {
    return (
        <div id="root">
            {details.map((contact, index) => (    
                <Card key={index} {...contact} />  
            ))}
        </div>
    );
}

const root = createRoot(document.getElementById("mainRoot"));
root.render(<App />);