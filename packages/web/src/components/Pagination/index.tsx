import styles from './Pagination.module.css';
import classNames from 'classnames';
import { useState, useEffect } from 'react';

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  changePage: (page: number) => void;
};

export default function Pagination({ totalPages, currentPage, changePage }: PaginationProps) {
  const [visiblePages, setVisiblePages] = useState<number[]>([]);

  useEffect(() => {
    updateVisiblePages(currentPage, totalPages);
  }, [currentPage, totalPages]);

  const updateVisiblePages = (currentPage: number, totalPages: number) => {
    const maxVisibleButtons = 5;

    let startPage = Math.max(currentPage - Math.floor(maxVisibleButtons / 2), 1);
    let endPage = startPage + maxVisibleButtons - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(endPage - maxVisibleButtons + 1, 1);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    setVisiblePages(pages);
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      changePage(page);
    }
  };

  return (
    <div className={styles.paginationContainer} data-test="pagination">
      <button
        className={styles.paginationButton}
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        data-test="pagination-prev"
      >
        Пред
      </button>
      {visiblePages.map((page) => (
        <button
          key={page}
          className={classNames(styles.paginationButton, currentPage === page ? styles.active : '')}
          onClick={() => handlePageChange(page)}
          data-test={currentPage === page ? 'current-page' : ''}
        >
          {page}
        </button>
      ))}
      <button
        className={styles.paginationButton}
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        data-test="pagination-next"
      >
        След
      </button>
    </div>
  );
}
