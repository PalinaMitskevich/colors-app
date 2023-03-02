import React from 'react';
import styles from './index.module.css';
import { observer } from "mobx-react-lite";
import { appState } from "../../store";

type Props = {
    color: Color
}
const Item: React.FC<Props> = observer(({color} ) => {
    const handleClick = () => {
        appState.setActiveColor(color)
        appState.setIsModalShown(true)
    }

    return (
        <div className={styles.item} style={{backgroundColor: color.color}} onClick={handleClick}>
            <div className={styles.descriptionContainer}>
                <p className={styles.description}>{color.id}</p>
            </div>
            <div className={styles.descriptionContainer}>
                <p className={styles.description}>{color.name}</p>
            </div>
            <div className={styles.descriptionContainer}>
                <p className={styles.description}>{color.year}</p>
            </div>
        </div>
    );
});

export default Item;