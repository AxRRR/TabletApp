import React, { Fragment, useEffect } from 'react';
import { ContainerWallpaperScreen } from '../TabletContainer';

export const CalculatorApp = (props) => {
    
    useEffect(() => { props.onCloseMain(); }, [props])

    return (
        <Fragment>
            <ContainerWallpaperScreen typeScreen="wallpaper-openapp">
                <h1>Rendering a new screen</h1>
            </ContainerWallpaperScreen>
        </Fragment>
    );
};
