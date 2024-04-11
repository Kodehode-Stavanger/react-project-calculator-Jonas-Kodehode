import { useState } from "react";
import Display from "./components/Display";
import Keypad from "./components/Keypad";
import Arithmetics from "./components/Arithmetics";


function App() {
    const [input, setInput] = useState("");
    const [calculate, setCalculate] = useState(false);

    return (
        <>
            <Display input={input} />
            {calculate && <Arithmetics input={input} />}
            <Keypad input={input} setInput={setInput} setCalculate={setCalculate} />
        </>
    );
}

export default App;
