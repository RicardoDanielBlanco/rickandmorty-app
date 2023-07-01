import { Link } from 'react-router-dom'
import styles from './styles.module.css'
import logo from './images/rick-and-morty.png'

function navbar(){
  return(
    <div className={styles.navBar}>
      <div className={styles.logo}>
        <img src={logo} alt="logo de Rick and Morty" />
      </div>
      <div className={styles.buttons}>
        <ul>
          <li><Link to='/' >Personajes</Link></li>
          <li><Link to='/Episodios' >Episodios</Link></li>
          <li><Link to='/Ubicaciones' >Ubicaciones</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default navbar;