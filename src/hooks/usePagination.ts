import { useState } from "react";

const usePagination: UsePagination = ({ itemsPerPage, itemsAmount }) => {
    const [page, setPage] = useState(1)
    const totalPages = Math.ceil(itemsAmount / itemsPerPage)
    const lastContentIndex = page * itemsPerPage
    const firstContentIndex = lastContentIndex - itemsPerPage

    const moveToNextPage = () => {
        setPage((state) => state === totalPages ? state : state + 1)
    }

    const moveToPrevPage = () => {
        setPage((state) => state === 1 ? state : state - 1)
    }

    const setPageDirectly = (num: number) => {
        if (num > totalPages) {
            setPage(totalPages)
        } else if (num < 1) {
            setPage(1)
        } else {
            setPage(num)
        }
    };

    return {
        totalPages,
        moveToNextPage,
        moveToPrevPage,
        setPage: setPageDirectly,
        firstContentIndex,
        lastContentIndex,
        page,
    };
};

export default usePagination;