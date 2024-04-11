export default function Arithmetics({input}) {
    const operators = ["+", "-", "*", "/"];
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
        return ("");
    }

    const firstNumber = parseFloat(input.substring(0, operatorIndex));
    const secondNumber = parseFloat(input.substring(operatorIndex + 1));



    let result;

    
    switch (operator) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            break;
        default:
            return null; 
    }

   
    return (
            <h3>{result}</h3>
    );
}
