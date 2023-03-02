import React from 'react';
import { observer } from "mobx-react-lite";
import { appState } from "../../store";
import { IoCloseOutline } from "react-icons/io5";
import styles from './index.module.css'


const Modal: React.FC = observer(() => {
    if(!appState.isModalShown) {
        return null
    }

    return (
        <div className={styles.modal} onClick={(event) => {
            if(event.target === event.currentTarget) {
                appState.setIsModalShown(false)
            }
        }} >
            <div className={styles.modalContainer}>
                <button className={styles.closeButton} onClick={() => appState.setIsModalShown(false)}><IoCloseOutline /></button>
                <p className={styles.colorId}>{appState.activeColor?.id}</p>
                <div className={styles.cardContainer}>
                    <div className={styles.pantoneColorContainer}>
                        <div className={styles.pantoneColor} style={{backgroundColor: appState.activeColor?.color}}>
                            <p className={styles.pantoneYear}>{appState.activeColor?.year}</p>
                        </div>
                        <p className={styles.pantoneName}>{appState.activeColor?.name}</p>
                        <p className={styles.pantoneValue}>{appState.activeColor?.pantone_value}</p>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Modal;