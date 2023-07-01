import { useEffect, useState } from "react";
import Card from "../../components/Card";
import useURLDiv from "../../hooks/urlDiv";
import Spinner from "../../components/spinner";
import DetailsCard from "../../components/DetailsCard";
import useFetchDataDetails from "../../hooks/useFetchDataDetails";


interface propsDetails {
  id : number;
  category : string
}

interface character {
  id: number;
  image: string;
  name: string;
  species: string;
  episode:string[]
}

function Details(props : propsDetails){
  const url=`https://rickandmortyapi.com/api/${props.category}/${props.id}`
  const [allCharacters, setAllCharacters] = useState<character[]>()
  const apiUrl = `https://rickandmortyapi.com/api/${props.category}/${props.id}`;
  const { data, loading, error } = useFetchDataDetails(apiUrl);
  const urlId = useURLDiv(data?.origin?.url || "")

  useEffect(() => {
    if (props.category === "episode") {
      fetchAllCharacters();
    }}, 
    []);

  async function fetchAllCharacters() {
    let allCharacters : character[]= [];
    let currentPage = 1;
    let totalPages = 1;
  
    while (currentPage <= totalPages) {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`);
      const { results, info } = await response.json();
      allCharacters = [...allCharacters, ...results];
      currentPage++;
      totalPages = info.pages;
    }
  
    setAllCharacters(allCharacters)
  }


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

  if (data) {
    return (
    <>
      <DetailsCard
        image={data?.image}
        name={data?.name}
        status={data?.status}
        species={data?.species}
        type={data?.type}
        gender={data?.gender}
        origin={data?.origin?.name}
        episode={data?.episode}
        dimension={data?.dimension}
        created={data?.created}
        air_date={data?.air_date}
        urlId={urlId}
      />
      {(props.category === "episode" && <div>
          <h3>Los personajes que aparecen en este episodio son</h3>
        <div className='conteinerCard'>
          {allCharacters ? (allCharacters.map((character : character)=>{
            if (character.episode.includes(url)) {
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
            }
          })
        ) : (<Spinner />)}
        </div>
      </div>
      )}
    </>
  );}
}

export default Details;