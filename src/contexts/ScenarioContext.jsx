import { createContext, useState } from "react";
import scenarios from "../pages/contentScenarios";

const ScenarioContext = createContext();

function ScenarioProvider({children}) {
    const [number, setNumber] = useState(0);
    const [scenario,setScenario] = useState({});
    const [selectedNumber, setSelectedNumber] = useState([]);

    function randomNumber(){
        setNumber(parseInt(Math.random() * (5) + 1))
 
    }
    function randomScenario(){
        setNumber(randomNumber());
        if(!selectedNumber.includes(number)){
            setScenario (scenarios[number])
            setSelectedNumber([...selectedNumber, number])
        }else {
            randomScenario();
        }
        
    }
    return(
        <ScenarioContext.Provider value={{scenario, randomScenario}}>
            {children}
        </ScenarioContext.Provider>
    )
}

export default ScenarioProvider;