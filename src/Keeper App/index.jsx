import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client"; 
import Note from "./components/note.jsx";
import Footer from "./components/footer.jsx";
// import notes from "./components/notes-data.js";

function App() {
    const [notes, setNotes] = useState([]);
    const [newHeading, setNewHeading] = useState("");
    const [newContent, setNewContent] = useState("");

    function handleAdd() {
        if(newHeading.trim() === "" || newContent.trim() === "") return;

        const newNote = {
            id: Date.now(),
            heading: newHeading,
            content: newContent
        };

        setNotes(prevNotes => [...prevNotes, newNote]);

        setNewHeading("");
        setNewContent("");
    }

    return (
        <div className= "main-layout">
            <div className= "input-container">
                <input className="headingInput" placeholder="Note Heading:" value={newHeading} onChange={(e) => setNewHeading(e.target.value)}/>
                <textarea className="contentInput" placeholder="Note Content:" value={newContent} onChange={(e) => setNewContent(e.target.value)}/>
                <button className="add-button" onClick = {handleAdd}>Add</button>
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