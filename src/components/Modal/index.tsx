import React from 'react';
import { observer } from "mobx-react-lite";
import { appState } from "../../store";
import './index.css'

const Modal: React.FC = observer(() => {
    if(!appState.isModalShown) {
        return null
    }

    return (
        <div className='modal'>
            <div className='modal-container'>
                <p>{appState.activeColor?.id}</p>
                <p>{appState.activeColor?.name}</p>
                <p>{appState.activeColor?.year}</p>
                <p>{appState.activeColor?.pantone_value}</p>
                <button onClick={() => appState.setIsModalShown(false)}>Close</button>
            </div>

        </div>
    );
});

export default Modal;