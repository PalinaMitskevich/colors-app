import React, { useEffect } from 'react';
import { observer } from "mobx-react-lite"
import Item from "../Item";
import { appState } from '../../store'
import usePagination from "../../hooks/usePagination";

const MainContent: React.FC = observer(() => {

    const {
        firstContentIndex,
        lastContentIndex,
        nextPage,
        prevPage,
        page,
        setPage,
        totalPages,
    } = usePagination({
        contentPerPage: 5,
        count: appState.colors.length,
    });

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
            : true)

    return (
        <div className='items-container'>
            {filteredColors
                .slice(firstContentIndex, lastContentIndex)
                .map((color) => <Item color={color} key={color.id}/>)}
            {filteredColors.length === 0 && (
                <div>Nothing found</div>
            )}
            <div className="pagination">
                <p className="text">
                    {page}/{totalPages}
                </p>
                <button onClick={prevPage} className="page">
                    &larr;
                </button>
                {/* @ts-ignore */}
                {[...Array(totalPages).keys()].map((el) => (
                    <button
                        onClick={() => setPage(el + 1)}
                        key={el}
                        className={`page ${page === el + 1 ? "active" : ""}`}
                    >
                        {el + 1}
                    </button>
                ))}
                <button onClick={nextPage} className="page">
                    &rarr;
                </button>
            </div>
        </div>
    );
});

export default MainContent;