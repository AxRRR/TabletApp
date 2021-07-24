import React, { useEffect, useState } from 'react';
import { getRealDate } from '../helpers/GetDate';
import { Apps } from './Apps';
import { ShowDate } from './Date/ShowDate';
import { ContainerWallpaperScreen } from './TabletContainer';


export const Main = props => {
    const [RealDate, setRealDate] = useState('')

    useEffect(() => {
        setRealDate(getRealDate());
    }, [])

    return (
        <div>
            <ContainerWallpaperScreen typeScreen="wallpaper">
                <ShowDate 
                    getTime={RealDate.getComptTime} 
                    getDate={RealDate.getComptDate} 
                />
                <Apps 
                    openCalculator={props.openCalculator}
                    openNotes={props.openNotes}
                />
                <div className='tablet__downbar'>
                    <span>back</span>
                </div>
            </ContainerWallpaperScreen>
        </div>
    );
};
