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


    return (
        <div className='items-container'>
            {appState.colors.map((color) => (
                <Item color={color} key={color.id}/>
            ) )}
        </div>
    );
});

export default MainContent;