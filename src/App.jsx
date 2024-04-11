import { useState, useEffect } from "react";
import Display from "./components/Display";
import Keypad from "./components/Keypad";
import Arithmetics from "./components/Arithmetics";



function App() {
    const [input, setInput] = useState("");
    const [calculate, setCalculate] = useState(false);
    const [result, setResult] = useState("")

    return (
        <>
            <Display input={input} result={result}/>
            <Arithmetics input={input} calculate={calculate} setCalculate={setCalculate} setResult={setResult}/>
            <Keypad input={input} setInput={setInput} setCalculate={setCalculate} setResult={setResult} />
        </>
    );
}

export default App;
