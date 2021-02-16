import './styles/Classification.scss'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Classification() {
  return(
    <>
      <div className="classification">
          <h4 className="statement">Clasifica tu comic:</h4>
          <button className="classification_button" value="Excelente">Excelente</button>
          <button className="classification_button" value="Buenisimo">Buenisimo</button>
          <button className="classification_button" value="Normalito">Normalito</button>
          <button className="classification_button" value="Malisimo">Malisimo</button>
          <button className="classification_button" value="El peor">El peor</button>
      </div>
    </>
  )
}