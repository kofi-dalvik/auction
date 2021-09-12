import React from 'react';
import PropTypes from 'prop-types';

function Pagination({ pageDetails, setCurrentPage}) {
    const {lastPage, currentPage} = pageDetails;

    const pages = Array(lastPage).fill(null);

    const setPage = (page) => {
        if (page > 0 && page <= lastPage) {
            setCurrentPage(page);
        }
    }

    return (
        <div className="d-flex justify-content-center">
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <button className="page-link" aria-label="Previous" onClick={() => setPage(currentPage - 1)}>
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </button>
                    </li>

                    {
                        pages.map((page,index) => (
                            <li
                                key={index}
                                className={`${currentPage === (index+1) ? 'active' : ''} page-item`}>
                                <button className="page-link" onClick={() => setPage(index+1) }>{index+1}</button>
                            </li>
                        ))
                    }

                    <li className="page-item">
                        <button className="page-link" aria-label="Next" onClick={() => setPage(currentPage + 1)}>
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

Pagination.propTypes = {
    pageDetails: PropTypes.object,
    setCurrentPage: PropTypes.func
}
export default Pagination
