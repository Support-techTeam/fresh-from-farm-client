/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

// eslint-disable-next-line
const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}: any) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <nav role="navigation" aria-label="Pagination Navigation" className="mt-5">
      <ul className="flex list-none items-center justify-center text-sm text-slate-700 md:gap-1">
        <li>
          <button
            onClick={() => handleClick(1)}
            aria-label="Goto Page 1"
            className="inline-flex h-10 items-center justify-center gap-4 rounded stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-500 hover:text-emerald-500 focus:bg-emerald-50 focus:stroke-emerald-600 focus:text-emerald-600 focus-visible:outline-none"
          >
            <span className="sr-only">First</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="-mx-1 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              role="graphics-symbol"
              aria-labelledby="title-03 desc-03"
            >
              <title id="title-03">First page</title>
              <desc id="desc-03">link to first page</desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            </svg>
          </button>
        </li>
        <li>
          <button
            onClick={() => handleClick(currentPage - 1)}
            aria-label="Goto Previous Page"
            className="inline-flex h-10 items-center justify-center gap-4 rounded stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-500 hover:text-emerald-500 focus:bg-emerald-50 focus:stroke-emerald-600 focus:text-emerald-600 focus-visible:outline-none"
          >
            <span className="sr-only">Previous</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="-mx-1 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              role="graphics-symbol"
              aria-labelledby="title-04 desc-04"
            >
              <title id="title-04">Previous page</title>
              <desc id="desc-04">link to previous page</desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </li>

        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          return (
            <li key={page}>
              <button
                onClick={() => handleClick(page)}
                aria-label={`Goto Page ${page}`}
                className={`hidden h-10 items-center justify-center rounded stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 ${
                  page === currentPage
                    ? 'bg-emerald-500 text-white ring-offset-2 hover:bg-emerald-600 focus:bg-emerald-700 bg-[#A4BC46] rounded-full'
                    : 'hover:bg-emerald-50 hover:stroke-emerald-500 hover:text-emerald-500 focus:bg-emerald-50 focus:stroke-emerald-600 focus:text-emerald-600'
                } md:inline-flex`}
              >
                {page}
              </button>
            </li>
          );
        })}

        <li>
          <button
            onClick={() => handleClick(currentPage + 1)}
            aria-label="Goto Next Page"
            className="inline-flex h-10 items-center justify-center gap-4 rounded stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-500 hover:text-emerald-500 focus:bg-emerald-50 focus:stroke-emerald-600 focus:text-emerald-600 focus-visible:outline-none"
          >
            <span className="sr-only">Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="-mx-1 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              role="graphics-symbol"
              aria-labelledby="title-05 desc-05"
            >
              <title id="title-05">Next page</title>
              <desc id="desc-05">link to next page</desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </li>
        <li>
          <button
            onClick={() => handleClick(totalPages)}
            aria-label="Goto Last Page"
            className="inline-flex h-10 items-center justify-center gap-4 rounded stroke-slate-700 px-4 text-sm font-medium text-slate-700 transition duration-300 hover:bg-emerald-50 hover:stroke-emerald-500 hover:text-emerald-500 focus:bg-emerald-50 focus:stroke-emerald-600 focus:text-emerald-600 focus-visible:outline-none"
          >
            <span className="sr-only">Last</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="-mx-1 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              role="graphics-symbol"
              aria-labelledby="title-06 desc-06"
            >
              <title id="title-06">Last page</title>
              <desc id="desc-06">link to last page</desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
