import React, { Fragment, useEffect } from 'react';
import { Downbar } from '../Downbar';
import { ContainerWallpaperScreen } from '../TabletContainer';

export const Countdown = (props) => {
    useEffect(() => { props.onCloseMain(); }, [props])

    const styles = {
        tablet__CountdownProgress: {
            position: 'relative',
            borderRadius: '60px',
            width: '100%',
            height: '60px',
            backgroundColor: '#ddd'
        },
        tablet__CountdownBar: {
            position: 'absolute',
            borderRadius: '20px',
            width: '100%',
            height: '60px',
            backgroundColor: '#ff7113', 
        },
        tablet__CountdownProgressLabel: {
            textAlign: 'center',
            fontFamily: 'Arial',
            fontSize: '30px',
            marginTop: '15px',
            lineHeight: '30px',
            color: 'black',
          }
    };

    const CountdownStart = ( timeCount ) => {
        let elem = document.getElementById("ProgressBar"); 
        let width = 100;
        let id = setInterval(frame, timeCount / 100);
        function frame() {
            if (width <= 0) {
                clearInterval(id);
            } else {
                width--;
                elem.style.width = width + '%'; 
                document.getElementById("label").innerHTML = width * 1  + '%';
            }
        }
    }

    return (
        <Fragment>
            <ContainerWallpaperScreen>
                <div>
                    <h1 className='tablet__Countdown-Mins'>5 minuters</h1>
                    <div className='tablet__Countdown-Container'>
                    <div style={styles.tablet__CountdownProgress}>
                        <div style={styles.tablet__CountdownBar} id='ProgressBar'>
                            <div style={styles.tablet__CountdownProgressLabel} id='label'>100%</div>
                        <button onClick={() => CountdownStart(60000)}>Click</button>
                        </div>
                    </div>
                    </div>
                </div>
                <Downbar onShowMain={props.onShowMain} onCloseCountdown={props.onCloseCountdown} />
            </ContainerWallpaperScreen>
        </Fragment>
    );
};
