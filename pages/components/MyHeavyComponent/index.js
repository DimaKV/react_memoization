import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import cl from 'classnames';
import style from './index.module.scss';
import {MemorizedFactorialCount} from "../FactorialCount/FactorialCount";
import {MyTime} from "../MyTime/MyTime";

const themes = {
    white: 'white',
    black: 'black',
};

const MAX_NUMBER = 20;

function MyHeavyComponent() {
    console.log('re-render MyHeavyComponent')
    const [ theme, setTheme ] = useState(themes.white);

    const [ currentNum, setCurrentNum ] = useState(MAX_NUMBER);
    const [ error, setError ] = useState(null);



    return (
        <div className={cl(style.heavyComponent, theme === themes.white ? style.heavyComponentWhite : style.heavyComponentBlack)}>
            <button
                className={style.button}
                onClick={() => {
                    if (theme === themes.white) {
                        setTheme(themes.black)
                    } else {
                        setTheme(themes.white)
                    }
                }}
            >
                Change theme
            </button>
            <section>
                <label className={style.factorialCalculation__Label}>Put your number:</label>
                <input
                    type="number"
                    value={currentNum}
                    className={style.factorialCalculation__Input}
                    onChange={(event) => {
                        const newNum = Number(event.target.value);
                        if (newNum > MAX_NUMBER) {
                            setError('Sorry, I will die to calculate it...:P');
                        } else setError(null)
                        setCurrentNum(event.target.value === '' ? event.target.value : newNum);
                    }}
                />
                <MemorizedFactorialCount currentNum={currentNum} error={error} MAX_NUMBER={MAX_NUMBER}/>
            </section>
            <MyTime/>
        </div>
    );
}

export default MyHeavyComponent;

