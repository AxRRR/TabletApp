import React, { Fragment } from 'react';

export const ContainerWallpaperScreen = (props ) => {
    return (
        <Fragment>
            <div className='tablet__main-container'>
                {props.typeScreen === 'wallpaper' ? 
                    <div className='tablet__wallpaper'>{props.children}</div>
                :
                    <div className='tablet__wallpaper-openapp'>{props.children}</div>}
            </div>
        </Fragment>
    );
    
};

// export const ContainerClearScreen = props => {
//     return (
//         <Fragment>
//             <div className='tablet__main-container'>
//                 <div className='tablet__wallpaper-openapp'>{props.children}</div>
//             </div>
//         </Fragment>
//     );
// };
