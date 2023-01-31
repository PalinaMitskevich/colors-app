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
            <div className='modal-content'>
                <div>{appState.activeColor?.name}</div>
                <h1 className='modal-header'>Modal window open</h1>
                <button onClick={() => appState.setIsModalShown(false)}>Close</button>
            </div>
        </div>
    );
});

export default Modal;