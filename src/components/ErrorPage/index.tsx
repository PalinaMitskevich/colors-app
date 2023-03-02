import React from 'react';
import {observer} from "mobx-react-lite";
import {appState} from "../../store";
import styles from './index.module.css'

const ErrorPage = observer(() => {

    return (
        <div className={styles.errorContainer}>
            <h1 className={styles.errorCode}>{appState.errorCode}</h1>
            <h2 className={styles.errorMessage}>WHOOPS!</h2>
            <h3 className={styles.errorDescription}>Something went wrong</h3>
        </div>
    );
});

export default ErrorPage;