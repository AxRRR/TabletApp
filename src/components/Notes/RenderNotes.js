import React, { Fragment } from 'react';

export const RenderNotes = ({ notes }) => {
    return (
        <Fragment>
            <div className='tablet__notes-container'>
            {notes.length > 1 ? notes.map((n) => (
            <div className='tablet__notes-container-ind' key={n.title}>
                <p className='tablet__notes-title'>{n.body}</p>
                <p className='tablet__notes-date'>{n.createat.getComptTime} {n.createat.getComptDate}</p>
            </div>
            )):
            <p>You don't have a notes to show</p>}
        </div>
        </Fragment>
    );
};
