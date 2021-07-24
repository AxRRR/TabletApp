import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';

export const ShowDate = ({ getTime = '', getDate = '' }) => {
    return (
        <Fragment>
            <h1 className='tablet__realTime'>{getTime}</h1>
            <h1 className='tablet__realDate'>{getDate}</h1>
        </Fragment>
    );
};

// ShowDate.propTypes = {
//     getTime: PropTypes.string.isRequired,
//     getDate: PropTypes.string.isRequired
// };
