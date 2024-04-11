import { useState } from "react"
import Button from "./Button"


export default function Keypad({input, setInput, setCalculate}) {
    
    const buttons = [
        "7", "8", "9", "DEL",
        "4", "5", "6", "+",
        "1", "2", "3", "-",
        ".", "0", "/", "*",
        "RESET", "="
    ]

    

    function handleClick(e) {
        const value = e.target.value
        if (value === "DEL") {
            setInput(input.slice(0, -1))
        } else if (value === "RESET") {
            setInput(""); 
        } else if (value === "=") {
            setCalculate(true);
        }
        else {
            setInput(input + value); 
        }
    }

   return (
    <>
    {buttons.map((button, i) => {
        return <Button key={i} input={button} handleClick={handleClick}/>
    })}
    
    </>
   )

}
