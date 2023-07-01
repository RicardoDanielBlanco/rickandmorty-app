import { Link } from 'react-router-dom';
import styles from './styles.module.css';

interface Data {
  image?:string;
  name: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  origin?: string;
  episode?:string;
  dimension?:string;
  created?:string;
  air_date?:string;
  urlId?:string
}

function DetailsCard(data : Data){
  return (

    <div className={styles.card}>
    {data && (
      <>
        { data.image && <div className={styles.img}><img src={data.image} alt={`Imagen de ${data.name}`} /></div>}
        <div>
        <h4>{`Nombre: ${data.name}`}</h4>
        {data.status && <p>{`Estatus: ${data.status}`}</p>}
        {data.species && <p>{`Especie: ${data.species}`}</p>}
        {typeof data.type === 'string' && <p>{`Tipo: ${data.type}`}</p>}
        {data.gender && <p>{`Genero: ${data.gender}`}</p>}
        {data.origin && (data.origin !== "unknown" ? <Link to={`/Ubicaciones/${data.urlId}`}>{`Origen: ${data.origin}`}</Link> : <p>{`Origen: ${data.origin}`}</p>)}            
        {data.air_date && <p>{`Episodio y temporada: ${data.episode}`}</p>}
        {data.dimension && <p>{`Dimensión: ${data.dimension}`}</p>}
        {data.dimension && <p>{`Creación: ${data.created}`}</p>}
        </div>
      </>
    )
    }
  </div>
  )
}

export default DetailsCard;