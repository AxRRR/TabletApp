import { useEffect, useState } from "react";
/* eslint no-eval: 0 */

export const useCalculator = (num, operator) => {
    const [result, setResult] = useState('')
    const [history, setHistory] = useState('')
    
    useEffect(() => {
        if (operator === "clear") {
            setResult('');
            setHistory('');
            return;
        }
        else if(operator === "backspace"){
            if (result !== "" && history === "") {
                let res = result.slice(0, -1);
                return setResult(res);
            }
        }
        else if(operator === "%"){
            let res = eval(result/100)
            return setResult(res)
        }
        else if (operator === "=") {
            try {
                let res = eval(result);
                console.log(res);
                setResult(res);
                setHistory(result);
            } catch (error) {
                setResult("Syntax Error");
            }
            } else if (operator) {
            return setResult(result + operator);
            } else if (result !== "" && history !== "") {
        }
        
    }, [operator])

    useEffect(() => {
        if (result === "" && history === "") {
            setResult(result + num);
        } else {
            setResult(result + num);
        }
    }, [num]);

    return {result, history}
}