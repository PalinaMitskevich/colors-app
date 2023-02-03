import React, { useEffect } from 'react';
import { observer } from "mobx-react-lite"
import Item from "../Item";
import { appState } from '../../store'
import usePagination from "../../hooks/usePagination";
import './index.css'

const MainContent: React.FC = observer(() => {
    useEffect(() => {
        const fetchInfo = async () => {
            const response = await fetch('https://reqres.in/api/products')
            const information = await response.json()
            appState.setColors(information.data)
        }
        fetchInfo()
    }, [])

    const filteredColors = appState.colors.filter(({ id }) => appState.searchInputValue !== ''
        ? String(id).includes(appState.searchInputValue)
        : true
    )

    const {
        firstContentIndex,
        lastContentIndex,
        moveToNextPage,
        moveToPrevPage,
        page,
        setPage,
        totalPages,
    } = usePagination({
        itemsPerPage: 5,
        itemsAmount: filteredColors.length,
    });

    const pages = Array.from(Array(totalPages), (_, index) => index + 1)

    return (
        <div className='items-container'>
            {filteredColors
                .slice(firstContentIndex, lastContentIndex)
                .map((color) => <Item color={color} key={color.id}/>)}
            {filteredColors.length === 0 && (
                <div>Nothing found</div>
            )}
            <div className="pagination">
                <p className="text">{page}/{totalPages}</p>
                <button onClick={moveToPrevPage} className="page">&larr;</button>
                {pages.map((item) => (
                    <button
                        onClick={() => setPage(item)}
                        key={item}
                        className={`page ${page === item ? "active" : ""}`}
                    >
                        {item}
                    </button>
                ))}
                <button onClick={moveToNextPage} className="page">&rarr;</button>
            </div>
        </div>
    );
});

export default MainContent;