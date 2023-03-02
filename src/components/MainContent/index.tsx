import React, { useEffect } from 'react';
import { observer } from "mobx-react-lite"
import Item from "../Item";
import { appState } from '../../store'
import usePagination from "../../hooks/usePagination";
import styles from './index.module.css'
import Pagination from "../Pagination";

const MainContent: React.FC = observer(() => {
    useEffect(() => {
        const fetchInfo = async () => {
            const response = await fetch('https://reqres.in/api/products/')
            if(response.ok) {
                const information = await response.json()
                appState.setColors(information.data)
                appState.setErrorCode(null)
            } else {
                appState.setErrorCode(response.status)
            }
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
        <div >
            <div className={styles.itemsContainer}>
                <div className={styles.heading}>
                    <div><p>ID</p></div>
                    <div><p>NAME</p></div>
                    <div><p>YEAR</p></div>
                </div>
                {filteredColors
                    .slice(firstContentIndex, lastContentIndex)
                    .map((color) => <Item color={color} key={color.id}/>)}
                {filteredColors.length === 0 && (
                    <div className={styles.notFoundPage}>Nothing found</div>
                )}
            </div>
            {filteredColors.length !== 0 && (
                <Pagination
                    page={page}
                    totalPages={totalPages}
                    moveToPrevPage={moveToPrevPage}
                    pages={pages}
                    setPage={setPage}
                    moveToNextPage={moveToNextPage}
                />
            )}
        </div>
    );
});

export default MainContent;