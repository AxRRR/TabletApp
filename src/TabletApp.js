import React, { useState } from 'react';
import { CalculatorApp } from './components/calculator/CalculatorApp';
import { Main } from './components/Main';

export const TabletApp = () => {

    const [showCalculator, setShowCalculator] = useState(false)
    const [showMain, setShowMain] = useState(true)

    return (
        <div>
            {showMain && <Main 
                openCalculator={() => setShowCalculator(true)} 
            />}
            {showCalculator && 
            <CalculatorApp 
                onCloseCalculator={() => setShowCalculator(false)}
                onCloseMain={() => setShowMain(false)}
            />}
        </div>
    );
};
