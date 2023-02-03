import React from 'react';
import { observer } from "mobx-react-lite";
import { appState } from "../../store";

const regexp = /^[0-9]*$/i;

const SearchInput:React.FC = observer(() => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(regexp.test(event.target.value)) {
            appState.setSearchInputValue(event.target.value)
        }

    }

    return (
        <div>
            <input type='text' value={appState.searchInputValue} onChange={handleChange}/>
        </div>
    );
});

export default SearchInput;