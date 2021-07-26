import React, { Fragment } from 'react';

export const Downbar = (props) => {
    const handleHome = (e) => {
        e.preventDefault()
        if(props.onCloseNotesApp){
            props.onCloseNotesApp();
            props.onShowMain();
        }
        else if(props.onCloseCalculator) {
            props.onCloseCalculator();
            props.onShowMain();
        }
        else if(props.onCloseCountdown) {
            props.onCloseCountdown();
            props.onShowMain();
        }
    }
    return (
        <Fragment>
            <div className='tablet__downbar'>
                <p className='tablet__downbar-items'>◄</p>
                <p className='tablet__downbar-items' onClick={handleHome}>●</p>
                <p className='tablet__downbar-items'>►</p>
            </div>
        </Fragment>
    );
};
