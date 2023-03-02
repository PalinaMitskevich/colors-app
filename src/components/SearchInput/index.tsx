import React from 'react';
import { observer } from "mobx-react-lite";
import { appState } from "../../store";
import styles from './index.module.css'

const regexp = /^[0-9]*$/i;

const SearchInput:React.FC = observer(() => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(regexp.test(event.target.value)) {
            appState.setSearchInputValue(event.target.value)
        }
    }

    return (
        <div className={styles.inputContainer}>
            <input type='text' value={appState.searchInputValue} onChange={handleChange} className={styles.input} placeholder='id'/>
        </div>
    );
});

export default SearchInput;