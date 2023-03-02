import React from 'react';
import MainContent from "./components/MainContent";
import SearchInput from "./components/SearchInput";
import Modal from "./components/Modal";
import styles from './App.module.css';
import {observer} from "mobx-react-lite";
import {appState} from "./store";
import ErrorPage from "./components/ErrorPage";

const App = observer(() => {

    return (
        <div className={styles.app}>
            {appState.errorCode === null ? (
                <>
                    <SearchInput />
                    <MainContent />
                </>
            ) : <ErrorPage />}
            <Modal />
        </div>
    );
})

export default App;
