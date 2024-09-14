import { useState } from 'react';

export default function usePagination(arr = [], itemsPerPage = 5) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsInPage = itemsPerPage;
    const lastIndex = currentPage * itemsInPage;
    const firstIndex = lastIndex - itemsInPage;
    let records;
    let totalPage = 0;
    if (arr?.length > 0) {
        records = arr.slice(firstIndex, lastIndex);
        totalPage = Math.ceil(arr.length / itemsInPage);
    } else {
        records = [];
    }
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    const nextPage = () => {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1);
        }
    };

    return {
        records,
        totalPage,
        currentPage,
        setCurrentPage,
        prevPage,
        nextPage,
        handlePageChange,
    };
}
