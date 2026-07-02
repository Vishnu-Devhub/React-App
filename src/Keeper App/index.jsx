import React from "react";                          // ✅ no unused useState
import { useState, useEffect } from "react";        // ✅ useEffect added
import { createRoot } from "react-dom/client";
import Note from "./components/note.jsx";
import Footer from "./components/footer.jsx";
import notes from "./components/notes-data.js";

function App() {
    return (
        <div>
            {notes.map((note) => (
                <Note key={note.id} heading={note.heading} content={note.content} />
            ))}
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