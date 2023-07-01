import { useNavigate } from "react-router-dom";
import styles from './styles.module.css'

function GoBackButton() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return <button className={styles.buttonBack} onClick={handleGoBack}>Volver atrás</button>;
}

export default GoBackButton;