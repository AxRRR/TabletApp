import React, { useEffect, useState } from 'react';
import { getRealDate } from '../helpers/GetDate';

export const Main = () => {
    const [RealDate, setRealDate] = useState('')

    useEffect(() => {
        setRealDate(getRealDate());
    }, [])

    return (
        <div>
            <div className='tablet__main-container'>
                <div className='tablet__wallpaper'>
                    <h1 className='tablet__realTime'>{RealDate.getComptTime}</h1>
                    <h1 className='tablet__realDate'>{RealDate.getComptDate}</h1>
                    <div className='tablet__container-apps'>
                        <img 
                            src='https://img.freepik.com/vector-gratis/diseno-icono-calculadora-nota_161751-1434.jpg?size=626&ext=jpg&ga=GA1.2.867744283.1624752000'
                            alt='calculatorapp'
                            className='tablet__screen-app'
                        />
                        <img 
                            src='https://i.pinimg.com/236x/89/4f/80/894f80c466bb749ae1cec0132663a932.jpg'
                            alt='calculatorappp'
                            className='tablet__screen-app'
                        />
                        <img 
                            src='https://i.pinimg.com/564x/4a/b1/bb/4ab1bbdb45b0ebe8890b0497f71a9d87.jpg'
                            alt='calculatorapp'
                            className='tablet__screen-app'
                        />
                    </div>
                    <div className='tablet__downbar'>
                        <span>back</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
