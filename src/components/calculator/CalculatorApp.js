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
                        <p onClick={() => setOperatorSelect('backspace')} className="calc_items-style" style={{color: '#ff7113'}}>CE</p>
                        <p onClick={() => setOperatorSelect('clear')} className="calc_items-style" style={{color: '#ff7113'}}>C</p>
                        <p onClick={() => setOperatorSelect('%')} className="calc_items-style" style={{color: '#ff7113'}}>%</p>
                        <p onClick={() => setOperatorSelect('/')} className="calc_items-style" style={{color: '#ff7113'}}>&#247;</p>
                        <p onClick={() => setOperatorSelect('*')} className="calc_items-style" style={{color: '#ff7113'}}>x</p>
                        <p onClick={() => setOperatorSelect('-')} className="calc_items-style" style={{color: '#ff7113'}}>-</p>
                        <p onClick={() => setOperatorSelect('+')} className="calc_items-style" style={{color: '#ff7113'}}>+</p>
                        <p onClick={() => setOperatorSelect('(')} className="calc_items-style" style={{color: '#ff7113'}}>(</p>
                        <p onClick={() => setOperatorSelect(')')} className="calc_items-style" style={{color: '#ff7113'}}>)</p>
                        <p onClick={() => setNumberSelect(9)} className="calc_items-style">9</p>
                        <p onClick={() => setNumberSelect(8)} className="calc_items-style">8</p>
                        <p onClick={() => setNumberSelect(7)} className="calc_items-style">7</p>
                        <p onClick={() => setNumberSelect(6)} className="calc_items-style">6</p>
                        <p onClick={() => setNumberSelect(5)} className="calc_items-style">5</p>
                        <p onClick={() => setNumberSelect(4)} className="calc_items-style">4</p>
                        <p onClick={() => setNumberSelect(3)} className="calc_items-style">3</p>
                        <p onClick={() => setNumberSelect(2)} className="calc_items-style">2</p>
                        <p onClick={() => setNumberSelect(1)} className="calc_items-style">1</p>
                        <p onClick={() => setNumberSelect(0)} className="calc_items-style">0</p>
                        <p onClick={() => setOperatorSelect('=')} className="calc_items-style" style={{color: 'white', backgroundColor: '#ff7113'}}>=</p>
                    </div>
                </div>
                <Downbar onShowMain={props.onShowMain} onCloseCalculator={props.onCloseCalculator} />
            </ContainerWallpaperScreen>
        </Fragment>
    );
};



  
