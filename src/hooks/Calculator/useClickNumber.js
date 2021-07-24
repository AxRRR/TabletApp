import { useEffect, useState } from "react";

export const useClickNumber = (num, operator) => {
    const [result, setResult] = useState('')
    const [history, setHistory] = useState('')
    const isResultShow = false;

    useEffect(() => {
        if (result === "" && history === "") {
            console.log(result + num)
            setResult(result + num);
        } else {
            console.log(result + num)
            setResult(result + num);
        }
    
    
    // useEffect(() => {
        if (operator === "clear") {
            setResult('');
            setHistory('');
            return;
        }
        else if(operator === "backspace"){
            let res = result.slice(0, -1);
            return setResult(res);
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
            if (isResultShow === true) {
                setResult(result);
            } else {
                setResult(result + operator + result);
            }
        }
    }, [operator, isResultShow, num])

    return {result, history}
}