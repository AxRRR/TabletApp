import React, { useState } from 'react';
import { CalculatorApp } from './components/calculator/CalculatorApp';
import { Main } from './components/Main';
import { NotesApp } from './components/Notes/NotesApp';

export const TabletApp = () => {

    const [showCalculator, setShowCalculator] = useState(false)
    const [showNotes, setShowNotes] = useState(false)
    const [showMain, setShowMain] = useState(true)

    return (
        <div>
            {showMain && <Main 
                openCalculator={() => setShowCalculator(true)}
                openNotes={() => setShowNotes(true)} 
            />}
            {showCalculator && 
            <CalculatorApp 
                onCloseCalculator={() => setShowCalculator(false)}
                onCloseMain={() => setShowMain(false)}
            />}
            {showNotes && 
            <NotesApp 
                onCloseCalculator={() => setShowNotes(false)}
                onCloseMain={() => setShowMain(false)}
            />}
        </div>
    );
};
