import React, { useState } from 'react';
import { CalculatorApp } from './components/Calculator/CalculatorApp';
import { Countdown } from './components/Countdown/Countdown';
import { Main } from './components/Main';
import { NotesApp } from './components/Notes/NotesApp';

export const TabletApp = () => {

    const [showMain, setShowMain] = useState(true)
    const [showCalculator, setShowCalculator] = useState(false)
    const [showNotes, setShowNotes] = useState(false)
    const [showCountdown, setShowCountdown] = useState(false)

    return (
        <div>
            {showMain && <Main 
                openCalculator={() => setShowCalculator(true)}
                openNotes={() => setShowNotes(true)} 
                openCountdown={() => setShowCountdown(true)} 
            />}
            {showCalculator && 
            <CalculatorApp 
                onCloseCalculator={() => setShowCalculator(false)}
                onCloseMain={() => setShowMain(false)}
                onShowMain={() => setShowMain(true)}
            />}
            {showNotes && 
            <NotesApp 
                onCloseNotesApp={() => setShowNotes(false)}
                onCloseMain={() => setShowMain(false)}
                onShowMain={() => setShowMain(true)}
            />}
            {showCountdown && 
            <Countdown 
                onCloseCountdown={() => setShowCountdown(false)}
                onCloseMain={() => setShowMain(false)}
                onShowMain={() => setShowMain(true)}
            />}
        </div>
    );
};
