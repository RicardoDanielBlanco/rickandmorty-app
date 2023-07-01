import '../../App.css'
import ButtPage from '../../components/ButtPage'
import Card from '../../components/Card'
import Spinner from '../../components/spinner';
import { useFetchData } from '../../hooks/useFetchData';

interface location {
  id: number;
  type: string;
  name: string;
  dimension: string;
}

function Location() {
  const { data : locations, loading, error , handlePageChange, currentPage, totalPages } =  useFetchData('https://rickandmortyapi.com/api/location')

  if (loading) {
    return (<Spinner />)
  }

  if (error) {
    return(
      <>
        <h2>Error en la petición</h2>
        <h3>{error}</h3>      
      </>
    )
  }

  if (locations) {
    return (
    <>
      <div className='conteinerCard'>
        {locations && (locations.map((location : location)=>{
          return (
            <Card
              key={location.id}
              id={location.id}
              name={location.name}
              type={location.type}
              dimension={location.dimension}
              category='Ubicaciones'
             />
          )
        }))
        }
      </div>
      <div className="conteinerCard">
        <ButtPage handlePageChange={handlePageChange} currentPage={currentPage} totalPages={totalPages} />
      </div>
    </>
  )}
}

export default Location