import { useState } from "react";
import Display from "./components/Display";
import Keypad from "./components/Keypad";

function App() {
    const [input, setInput] = useState("")
    return(
        <>
        <Display input={input}/>
        <Keypad input={input} setInput={setInput}/>
        </>
    )
    
    
}

export default App;
