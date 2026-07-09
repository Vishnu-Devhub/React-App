import React from "react";                          // ✅ no unused useState
import { useState, useEffect } from "react";        // ✅ useEffect added
import { createRoot } from "react-dom/client"; 
import Note from "./components/note.jsx";
import Footer from "./components/footer.jsx";
import notes from "./components/notes-data.js";

function App() {
    const [newHeading, setNewHeading] = useState("");
    const [newContent, setNewContent] = useState("");

    function newNote(e) {
        console.log("New Note Creating...");
        if(e.target === "headingInput"){
            setNewHeading(e.target.value);
        }else {
            setNewContent(e.target.value);
        }
    };

    return (
        <div className= "main-layout">
            <div className= "input-container">
                <input className="headingInput" placeholder="Note Heading:"/>
                <input className="contentInput" type="paragraph" placeholder="Note Content:"/>
                <button className="add-button" onClick = {newNote}>Add</button>
            </div>
            <div className= "grid-layout">
                {notes.map((note) => (
                    <Note key={note.id} heading={note.heading} content={note.content} />
                ))}
            </div>
            <Footer />
        </div>
    );
}

function NewHeader() {
    const [newTime, setNewtime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {                               // ✅ setInterval inside useEffect
        const interval = setInterval(() => {
            setNewtime(new Date().toLocaleTimeString());
        }, 1000);                                   // updates every second
        return () => clearInterval(interval);       // ✅ cleanup on unmount
    }, []);

    return (
        <header>
            <div className="header-inner">          {/* ✅ className */}
                <h1>Keeper</h1>
                <div id="time">{newTime}</div>
            </div>
        </header>
    );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);

const newHeader = createRoot(document.getElementById("Header"));
newHeader.render(<NewHeader />);