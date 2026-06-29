import React, {useState} from "react";
import {createRoot} from "react-dom/client";
import Header from "./components/header";
import Note from "./components/note";
import Footer from "./components/footer";

function App() {
    return (
        <div>
            <Header />
            <Note />
            <Footer />
        </div>
    );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);