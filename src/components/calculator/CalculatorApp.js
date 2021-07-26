import React, { Fragment, useEffect, useState } from 'react';
import { useCalculator } from '../../hooks/Calculator/useClickNumber';
import { Downbar } from '../Downbar';
import { ContainerWallpaperScreen } from '../TabletContainer';

export const CalculatorApp = (props) => {

    const [numberSelect, setNumberSelect] = useState('')
    const [operatorSelect, setOperatorSelect] = useState('')
    
    useEffect(() => { props.onCloseMain(); }, [props])
    const { result, history } = useCalculator(numberSelect, operatorSelect);


    return (
        <Fragment>
            <ContainerWallpaperScreen typeScreen="wallpaper-openapp">
                <div className="calc_container-main">
                    <div className="calc_container-items">
                        <div>
                            <p id="history" className="calc_item-history">{history}</p>
                            <p id="result" className="calc_item-opera">{result}</p>
                        </div>
                        <p onClick={() => setOperatorSelect('backspace')} name="operator" id="backspace" className="calc_items-style" style={{color: '#ff7113'}}>CE</p>
                        <p onClick={() => setOperatorSelect('clear')} name="operator" id="clear" className="calc_items-style" style={{color: '#ff7113'}}>C</p>
                        <p onClick={() => setOperatorSelect('%')} name="operator" id="%" className="calc_items-style" style={{color: '#ff7113'}}>%</p>
                        <p onClick={() => setOperatorSelect('/')} name="operator" id="/" className="calc_items-style" style={{color: '#ff7113'}}>&#247;</p>
                        <p onClick={() => setOperatorSelect('*')} name="operator" id="*" className="calc_items-style" style={{color: '#ff7113'}}>x</p>
                        <p onClick={() => setOperatorSelect('-')} name="operator" id="-" className="calc_items-style" style={{color: '#ff7113'}}>-</p>
                        <p onClick={() => setOperatorSelect('+')} name="operator" id="+" className="calc_items-style" style={{color: '#ff7113'}}>+</p>
                        <p onClick={() => setOperatorSelect('(')} name="operator" id="(" className="calc_items-style" style={{color: '#ff7113'}}>(</p>
                        <p onClick={() => setOperatorSelect(')')} name="operator" id=")" className="calc_items-style" style={{color: '#ff7113'}}>)</p>
                        <p name="number" id="9" className="calc_items-style" onClick={() => setNumberSelect(9)}>9</p>
                        <p name="number" id="8" className="calc_items-style" onClick={() => setNumberSelect(8)}>8</p>
                        <p name="number" id="7" className="calc_items-style" onClick={() => setNumberSelect(7)}>7</p>
                        <p name="number" id="6" className="calc_items-style" onClick={() => setNumberSelect(6)}>6</p>
                        <p name="number" id="5" className="calc_items-style" onClick={() => setNumberSelect(5)}>5</p>
                        <p name="number" id="4" className="calc_items-style" onClick={() => setNumberSelect(4)}>4</p>
                        <p name="number" id="3" className="calc_items-style" onClick={() => setNumberSelect(3)}>3</p>
                        <p name="number" id="2" className="calc_items-style" onClick={() => setNumberSelect(2)}>2</p>
                        <p name="number" id="1" className="calc_items-style" onClick={() => setNumberSelect(1)}>1</p>
                        <p name="number" id="0" className="calc_items-style" onClick={() => setNumberSelect(0)}>0</p>
                        <p onClick={() => setOperatorSelect('=')} name="operator" id="=" className="calc_items-style" style={{color: 'white', backgroundColor: '#ff7113'}}>=</p>
                    </div>
                </div>
                <Downbar onShowMain={props.onShowMain} onCloseCalculator={props.onCloseCalculator} />
            </ContainerWallpaperScreen>
        </Fragment>
    );
};



  
