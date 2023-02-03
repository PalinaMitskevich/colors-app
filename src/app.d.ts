type Color = {
    id: number
    name: string
    year: number
    color: string
    pantone_value: string
}

interface UsePaginationProps {
    contentPerPage: number,
    count: number,
}
interface UsePaginationReturn {
    page: number;
    totalPages: number;
    firstContentIndex: number;
    lastContentIndex: number;
    moveToNextPage: () => void;
    moveToPrevPage: () => void;
    setPage: (page: number) => void;
}
type UsePagination = (UsePaginationProps) => (UsePaginationReturn);