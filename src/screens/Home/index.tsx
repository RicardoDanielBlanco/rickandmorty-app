import '../../App.css'
import ButtPage from '../../components/ButtPage'
import Card from '../../components/Card'
import Spinner from '../../components/spinner';
import { useFetchData } from '../../hooks/useFetchData';

interface character {
  id: number;
  image: string;
  name: string;
  species: string;
}

function Home() {
  const { data : characters, loading, error , handlePageChange, currentPage, totalPages } =  useFetchData('https://rickandmortyapi.com/api/character')

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

  if (characters) {
    return (
    <>
      <div className='conteinerCard'>
        {characters && (characters.map((character : character)=>{
          return (
            <Card
              key={character.id}
              id={character.id}
              image={character.image}
              name={character.name}
              species={character.species}
              category='Personajes'
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
export default Home;