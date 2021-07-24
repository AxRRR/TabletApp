import React, { Fragment, useEffect, useState } from 'react';
import { getRealDate } from '../../helpers/GetDate';
import { useForm } from '../../hooks/Util/useForm';
import { ContainerWallpaperScreen } from '../TabletContainer';
import { RenderNotes } from './RenderNotes';

export const NotesApp = (props) => {
    const [hideNotes, setHideNotes] = useState(true)
    const [notes, setNotes] = useState([])
    const [RealDate, setRealDate] = useState('')

    useEffect(() => { props.onCloseMain(); }, [props])


    const [form, handlerInputChange] = useForm({
        title: '',
        body: '',
        createat: getRealDate()
    })

    console.log(notes)

    const handleSubmit = (e) => {
        e.preventDefault()
        setNotes([...notes, form])
        setHideNotes(true);
    }


    return (
        <Fragment>
            <ContainerWallpaperScreen>
                <div className='tablet__input-container'>
                    <input 
                        type='text' 
                        placeholder='find note'
                        className='tablet__inputNotes'
                    />
                </div>
                {hideNotes ? <RenderNotes notes={notes} /> :
                <div className='tablet__notes-container'>
                    <form onSubmit={handleSubmit}>
                        <p className='tablet__notes-addTitle'>Add a new note</p>
                        <input 
                            type='text' 
                            placeholder='title'
                            name='title' 
                            onChange={handlerInputChange} 
                            className='tablet__add-inputTitle'
                        />
                        <textarea 
                            type='text' 
                            name='body' 
                            onChange={handlerInputChange} 
                            className='tablet__add-inputBody'
                        />
                        <button className='tablet__add-btnCancel'>Cancel</button>
                        <button className='tablet__add-btnAccept'>Accept</button>
                    </form>
                </div>}
                <div className='tablet__notes-container-add'>
                    <p className='tablet__notes-add' onClick={() => setHideNotes(false)}>+</p>
                </div>
            </ContainerWallpaperScreen>
        </Fragment>
    );
};
