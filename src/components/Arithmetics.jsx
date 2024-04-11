import { useEffect } from "react";

export default function Arithmetics({input, calculate, setCalculate, result, setResult}) {
    useEffect(() => {

        if (!calculate) {
            return;
        }

    const operators = ["+", "-", "x", "/"];
    let operatorIndex = -1;
    let operator = "";


    for (let i = 0; i < input.length; i++) {
        if (operators.includes(input[i])) {
            operatorIndex = i;
            operator = input[i];
            break;
        }
    }


   
    if (operatorIndex === -1) {
        setResult("")
        setCalculate(false)
        return
    } 

    const firstNumber = parseFloat(input.substring(0, operatorIndex));
    const secondNumber = parseFloat(input.substring(operatorIndex + 1));



    let calculationResult;

    
    switch (operator) {
        case '+':
            calculationResult = firstNumber + secondNumber;
            break;
        case '-':
            calculationResult = firstNumber - secondNumber;
            break;
        case 'x':
            calculationResult = firstNumber * secondNumber;
            break;
        case '/':
            calculationResult = firstNumber / secondNumber;
            break;
        default:
            return null; 
    }



        if (!isNaN(calculationResult)) {
            setResult(calculationResult)
        } else {
            return null
        }

        setCalculate(false)
        

    },  [calculate, input])
   
    return null
}