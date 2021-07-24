import React, { Fragment } from 'react';

export const Apps = props => {
    return (
        <Fragment>
            <div className='tablet__container-apps'>
                <img 
                    src='https://img.freepik.com/vector-gratis/diseno-icono-calculadora-nota_161751-1434.jpg?size=626&ext=jpg&ga=GA1.2.867744283.1624752000'
                    alt='calculatorapp'
                    className='tablet__screen-app'
                    onClick={props.openCalculator}
                />
                <img 
                    src='https://i.pinimg.com/236x/89/4f/80/894f80c466bb749ae1cec0132663a932.jpg'
                    alt='noteapp'
                    className='tablet__screen-app'
                    onClick={props.openNotes}
                />
                <img 
                    src='https://i.pinimg.com/564x/4a/b1/bb/4ab1bbdb45b0ebe8890b0497f71a9d87.jpg'
                    alt='relojapp'
                    className='tablet__screen-app'
                />
                <img 
                    src='https://thumbs.dreamstime.com/b/movimiento-editable-perfecto-del-pixel-icono-cron%C3%B3metro-o-hacia-fuera-132397971.jpg'
                    alt='cronometerapp'
                    className='tablet__screen-app'
                />
                <img 
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN4G4PYqxm3aizuNQMlcKd2KOWB_f4J_qDRg&usqp=CAU'
                    alt='bankapp'
                    className='tablet__screen-app'
                />
            </div>
        </Fragment>
    );
};
