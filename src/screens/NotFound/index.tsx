import { Link } from 'react-router-dom';
import image from './images/Rick-And-Morty-PNG-Images.png'
import styles from './styles.module.css'

function NotFound(){

  return(
    <>
      <div className={styles.conteiner}>
        <h2 className={styles.error}> ERROR 404 </h2>
        <img src={image} alt="Logo page not found" />
        <h2 className={styles.text}> Página no encontrada </h2>
        <Link className={styles.buttonBack} to={'/'} >Volver al inicio</Link>
      </div>
    </>
    )
}

export default NotFound;