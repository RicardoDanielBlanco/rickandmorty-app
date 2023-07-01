import { useFetchData } from '../../hooks/useFetchData';
import '../../App.css';
import ButtPage from '../../components/ButtPage';
import Card from '../../components/Card';
import Spinner from '../../components/spinner';

interface Episode {
  id: number;
  name: string;
  episode: string;
}

function Episode() {
  const { data: episodes, loading, error, handlePageChange, currentPage, totalPages } = useFetchData('https://rickandmortyapi.com/api/episode');

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

  if (episodes) {
    return (
    <>
      <div className='conteinerCard'>
        {episodes && (episodes.map((episode: Episode) => (
            <Card
            key={episode.id}
            id={episode.id}
            name={episode.name}
            episode={episode.episode} 
            category='Episodios'
            />
          ))
        )}
      </div>
      <div className="conteinerCard">
        <ButtPage handlePageChange={handlePageChange} currentPage={currentPage} totalPages={totalPages} />
      </div>
    </>
  );}
}

export default Episode;