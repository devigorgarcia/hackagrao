import { useState } from "react";
import scenarios from "./contentScenarios";

export default function CenarioRandom(){
   
    const [number, setNumber] = useState(0);
    function randomNumber(){
        setNumber(parseInt(Math.random() * (6) + 1))
 
    }
    return(
        <div>
            <div>
            <span>{number}</span>
            </div>
            <button onClick={randomNumber}>aa</button>
        </div>
    )
}