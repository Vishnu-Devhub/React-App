import React, {useState} from "react";
import { createRoot } from "react-dom/client";

function App(){
    const [greeting, setGreeting] = useState("");
    const [color, setColor] = useState("black");
    const [inputTime, setInputTime] = useState("");

    function handleSubmit(){
        const time = parseInt(inputTime);
        if(isNaN(time) || time < 0 || time > 24){
            setGreeting("Please enter a valid hour (0-24): ");
            setColor("black");
            return;
        }
        if(time < 12){
            setColor("red");
            setGreeting("Good Morning");
        }else if(12 <= time && time < 18){
            setColor("Green");
            setGreeting("Good Afternoon");
        }else if(18 <= time && time < 24){
            setColor("Blue");
            setGreeting("Good Night");
        }
    }

    const custStyle = {
        color: color,
        fontSize: "30px",
        border: "1px solid black"
    };

    return (
        <div>
            <input 
                type="number"
                placeholder="Enter the hour valud (0-24): "
                value={inputTime}
                onChange={(e) => setInputTime(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
            {greeting && <h1 style={custStyle}>{greeting}</h1>}
        </div>
    );
}


const root = createRoot(document.getElementById("root"));
root.render(<App />);
