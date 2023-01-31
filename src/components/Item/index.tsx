import React from 'react';
import './index.css';
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
        <div className='item' style={{backgroundColor: color.color}} onClick={handleClick}>
            {color.id}
            {color.name}
            {color.year}
        </div>
    );
});

export default Item;