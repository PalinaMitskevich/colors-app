import React from 'react';
import {IoArrowBackOutline, IoArrowForwardOutline} from "react-icons/io5";
import styles from './index.module.css'

type Props = {
    page: number;
    totalPages: number;
    moveToNextPage: () => void;
    moveToPrevPage: () => void;
    setPage: (page: number) => void;
    pages: Array<number>;
}

const Pagination: React.FC<Props> = ({ page, totalPages, moveToPrevPage, pages, setPage, moveToNextPage }) => {
    return (
        <div className={styles.pagination}>
            <div className={styles.buttonsContainer}>
                <button onClick={moveToPrevPage} className={styles.arrowBack}><IoArrowBackOutline /></button>
                {pages.map((item) => (
                    <button
                        onClick={() => setPage(item)}
                        key={item}
                        className={`${styles.page} ${page === item ? styles.active : null}`}
                    >
                        {item}
                    </button>
                ))}
                <button onClick={moveToNextPage} className={styles.arrowForward}><IoArrowForwardOutline /></button>
            </div>
            <p className={styles.text}>{page}/{totalPages}</p>
        </div>
    );
};

export default Pagination;