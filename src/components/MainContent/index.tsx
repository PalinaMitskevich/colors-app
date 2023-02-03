import React, { useEffect } from 'react';
import { observer } from "mobx-react-lite"
import Item from "../Item";
import { appState } from '../../store'

const MainContent: React.FC = observer(() => {

    useEffect(() => {
        const fetchInfo = async () => {
            const response = await fetch('https://reqres.in/api/products')
            const information = await response.json()
            console.log(information)
            appState.setColors(information.data)
        }
        fetchInfo()
    }, [])

    const filteredColors = appState.colors.filter(({ id }) => appState.searchInputValue !== ''
            ? String(id).includes(appState.searchInputValue)
            : true)

    return (
        <div className='items-container'>
            {filteredColors.map((color) => <Item color={color} key={color.id}/>)}
            {filteredColors.length === 0 && (
                <div>Nothing found</div>
            )}
        </div>
    );
});

//to make if nothingth found

export default MainContent;