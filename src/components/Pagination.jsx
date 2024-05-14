// src/components/Pagination.js
import React, { useState } from 'react';
import LogsTable from './LogsTable';

const Pagination = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="card flex justify-content-center align-items-center px-50 py-40 my-20">
        {pageNumbers.length > 0 ? (
          <div className="button-div">
            {pageNumbers.map(number => (
              <button key={number} onClick={() => setCurrentPage(number)}>
                {number}
              </button>
            ))}
          </div>
        ) : <p>No pages to display</p>}
      </div>
      <LogsTable logs={currentItems} />
    </>
  );
};

export default Pagination;