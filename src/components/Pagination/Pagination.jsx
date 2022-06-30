import React from 'react'

const Pagination = ({ currentPage, setCurrentPage, quantityPages, currentBlock,pages, setCurrentBlock, pagesPerBlock}) => {

    const prevPage = e => {
        if (currentPage - 1 === 0) {
            setCurrentPage(quantityPages);
            setCurrentBlock(Math.ceil(quantityPages / pagesPerBlock));
        } else {
            setCurrentPage(currentPage - 1);
            setCurrentBlock(Math.ceil((currentPage-1) / pagesPerBlock));
        }
    }

    const nextPage = e => {
        if (currentPage + 1 > quantityPages) {
            setCurrentPage(1);
            setCurrentBlock(1);
        } else {
            setCurrentPage(currentPage + 1);
            setCurrentBlock(Math.ceil((currentPage + 1)/pagesPerBlock));
        }
    }

    const nextBlock = e => {
        if (currentBlock + 1 > Math.ceil(quantityPages / pagesPerBlock)) {
            setCurrentBlock(1);
        } else {
            setCurrentBlock(currentBlock + 1)
        }
    }

    const prevBlock = e => {
        if (currentBlock - 1 === 0) {
            setCurrentBlock(Math.ceil(quantityPages / pagesPerBlock))
        } else {
            setCurrentBlock(currentBlock - 1)
        }
    }

    const changePageTo = n => { setCurrentPage(n), setCurrentBlock(Math.ceil(n / pagesPerBlock)) };

    return (
        <div className='pagination-container'>
            <div onClick={prevPage} className='pagination-prev-next'>&#60;</div>
            <button onClick={prevBlock}>...</button>
            <ul className='pagination-number-container'>
                {
                    pages?.map(num => (
                        <li
                            onClick={() => changePageTo(num)}
                            key={num}
                            className={currentPage === num ? `page-number page-active` : `page-number`}
                        >{num}</li>
                    ))
                }
            </ul>
            <button onClick={nextBlock}>...</button>
            <div onClick={nextPage} className='pagination-prev-next'>&#62;</div>
        </div>
    )
}

export default Pagination