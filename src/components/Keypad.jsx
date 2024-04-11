import { useState } from "react"
import Button from "./Button"
import styles from "./Keypad.module.css"


export default function Keypad({input, setInput, setCalculate, setResult}) {
    
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
            setResult("")
        } else if (value === "=") {
            setCalculate(true);
        }
        else {
            setInput(input + value); 
        }
    }

   return (
    <div className={styles.gridContainer}>
    {buttons.map((button, i) => {
        return <Button styles={styles.button} key={i} input={button} handleClick={handleClick}/>
    })}
    
    </div>
   )

}
