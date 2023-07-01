import { useEffect, useState } from 'react';

export function useFetchData(API_URL: string) {
  const [data, setData] = useState([]);  
  const [loading, setLoading] = useState(true);  
  const [error , setError] = useState(null);  

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  function handlePageChange(pageNumber: number) {
    setCurrentPage(pageNumber);
  }

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  async function fetchData() {
    try {
      const response = await fetch(`${API_URL}?page=${currentPage}`);
      const json = await response.json();
      setTotalPages(json.info.pages);

      if(data.error) {
        setLoading(false)
        setError(data.error)
      } else {
        setData(json.results);
        setLoading(false)
        setError(null)
      }
    } catch (e) {
      console.error("error", e)
    }

  }

  return { data, loading, error ,handlePageChange, currentPage, totalPages };
}