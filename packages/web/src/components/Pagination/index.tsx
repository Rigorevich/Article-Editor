import styles from './Pagination.module.css';

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  changePage: (page: number) => void;
};

export default function Pagination({ totalPages, currentPage, changePage }: PaginationProps) {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      changePage(page);
    }
  };

  return (
    <div className={styles.paginationContainer}>
      <button
        className={styles.paginationButton}
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Пред
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={`${styles.paginationButton} ${currentPage === index + 1 ? styles.active : ''}`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className={styles.paginationButton}
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        След
      </button>
    </div>
  );
}
