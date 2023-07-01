import { Link } from 'react-router-dom';
import styles from './styles.module.css';

interface CardProps {
    id : number ;
    image?: string;
    name: string;
    species?: string;
    type?: string;
    dimension?: string;
    episode?: string;
    category: string
  }

function Card(props: CardProps) {
    return (
        <Link to={`/${props.category}/${props.id}`} className={styles.card}>
            { props.image && <div className={styles.img}><img src={props.image} alt={`Imagen de ${props.name}`} /></div>}
            <h4>{props.name}</h4>
            { props.species && <p>{`Especie: ${props.species}`}</p>}
            { props.type && <p>{`Tipo: ${props.type}`}</p>}
            { props.dimension && <p>{`Dimensión: ${props.dimension}`}</p>}
            { props.episode && <p>{`Episodio: ${props.episode}`}</p>}
        </Link>)
}

export default Card;