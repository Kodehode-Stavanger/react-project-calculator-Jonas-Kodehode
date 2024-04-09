import { useState } from "react"
import Button from "./Button"


export default function Keypad({input, setInput}) {
    const operators = ["+", "-", "*", "/"]
    const buttons = [
        "7", "8", "9", "DEL",
        "4", "5", "6", "+",
        "1", "2", "3", "-",
        ".", "0", "/", "*",
        "RESET", "="
    ]

    

    function getValue(e) {
        if (e === "DEL") {
            setInput(input.slice(0, -1))
        } else if (e === "RESET") {
            setInput(""); 
        } else {
            setInput(input + e); 
        }
    }

   return (
    <>
    {buttons.map((button, i) => {
        return <Button key={i} input={button} getValue={() => getValue(button)}/>
    })}
    </>
   )

}
