import styles from './styles.module.css';


interface Props {
  handlePageChange: (pageNumber: number) => void;
  currentPage: number;
  totalPages: number;
}

function ButtPage({handlePageChange, currentPage, totalPages} : Props) {
    function handlePreviousPage() {
      if (currentPage > 1) {
        handlePageChange(currentPage - 1);
      }
    }
  
    function handleNextPage() {
      if (currentPage < totalPages) {
        handlePageChange(currentPage + 1);
      }
    }
  
    return (
      <div className={styles.navPag}>
        <button className={styles.buttonPageL} onClick={handlePreviousPage}>Anterior</button>
        <p>{`Página ${currentPage}`}</p>
        <button className={styles.buttonPageR} onClick={handleNextPage}>Siguiente</button>
      </div>
    );
  }

export default ButtPage;