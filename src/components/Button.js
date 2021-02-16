import './styles/Button.scss';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function ButtonAdd({ 
  handleAddFavorites
 }) 
{
  return(
    <button
      className="buttonAdd"
      title="Añadir a favoritos"
      onClick = {handleAddFavorites}
    ><FontAwesomeIcon icon={faPlus}/></button>
  )
}

export function ButtonNext({ 
  handleNextComic
 }) 
{
  return(
    <button
      className="buttonNext"
      onClick = {handleNextComic}
    >Siguiente Comic</button>
  )
}