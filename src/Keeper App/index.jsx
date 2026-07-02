import React, {useState} from "react";
import {createRoot} from "react-dom/client";
import Note from "./components/note.jsx";
import Footer from "./components/footer.jsx";
import notes from "./components/notes-data.js"

function App() {
    return (
        <div>
            <header>
                <h1>Keeper</h1>
            </header>
            {notes.map((note) => (
                <Note key={note.id} heading={note.heading} content={note.content} />
            ))}
            <Footer />
        </div>
    );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);