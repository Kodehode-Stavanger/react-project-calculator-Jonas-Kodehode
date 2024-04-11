import { useState, useEffect } from "react";
import Display from "./components/Display";
import Keypad from "./components/Keypad";
import Arithmetics from "./components/Arithmetics";
import styles from "./App.module.css"



function App() {
    const [input, setInput] = useState("");
    const [calculate, setCalculate] = useState(false);
    const [result, setResult] = useState("")

    return (
        <div className={styles.fullPage}>
        <h2 className={styles.calcText}>calc</h2>
            <Display input={input} result={result}/>
            <Arithmetics input={input} calculate={calculate} setCalculate={setCalculate} setResult={setResult}/>
            <Keypad input={input} setInput={setInput} setCalculate={setCalculate} setResult={setResult} />
        </div>
    );
}

export default App;
