import React, { Fragment } from 'react';

export const ShowDate = ({ getTime = '', getDate = '' }) => {
    return (
        <Fragment>
            <h1 className='tablet__realTime'>{getTime}</h1>
            <h1 className='tablet__realDate'>{getDate}</h1>
        </Fragment>
    );
};

