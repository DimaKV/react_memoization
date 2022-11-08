import style from "../MyHeavyComponent/index.module.scss";
import React from "react";

const FactorialCount = ({currentNum, error, MAX_NUMBER}) => {
    console.log('count factorial');
    const factorialCurrentNum = typeof currentNum === 'number' && currentNum <= MAX_NUMBER
        ? factorial(currentNum)
        : null;

    return (
       <>
           {error && <p className={style.factorialCalculation__Error}>{error}</p>}
           <p className={style.factorialCalculation__Result}>
               Factorial current number {currentNum} is:
               {` ${factorialCurrentNum || 'NOOOOOOO!!! I am dead! :D'}`}
           </p>
       </>
    )
}

function factorial(n) {
    if (n < 0) {
        console.error('factorial вызван с неверным значением n');
    } else if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

export const MemorizedFactorialCount =  React.memo(FactorialCount)