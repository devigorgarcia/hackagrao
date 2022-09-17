import { useState } from "react";
import scenarios from "./contentScenarios";

export default function CenarioRandom(){
   
    const [number, setNumber] = useState(0);
    function randomNumber(){
        setNumber(parseInt(Math.random() * (5) + 1))
 
    }
    
    return(
        <div>
            <div>
                <span>{scenarios[number].content}{scenarios[number].value},00/saca.</span>
            </div>
            <button onClick={randomNumber}>aa</button>
        </div>
    )
}