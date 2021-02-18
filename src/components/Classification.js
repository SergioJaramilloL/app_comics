import './styles/Classification.scss'
import { setClassification } from '../store/actions/Home.action';
import { useDispatch } from 'react-redux';


export function Classification() {
  const dispatch = useDispatch();
  
  const handleClick = (event) => {
    const { name, value } = event.target;
    switch(name) {
      case 'Divertido':
        dispatch(setClassification(value));
        break;
      case 'Ciencia':
        dispatch(setClassification(value));
        break;
      case 'Interesante':
        dispatch(setClassification(value));
        break;
      default: break;
    }
  };
 
  return(
    <>
      <div className="classification">
          <h4 className="statement">Clasifica tu comic:</h4>
          <button 
            className ="classification_button" 
            name = "Divertido"
            value ="Divertido"
            onClick = {handleClick}
          >Divertido</button>
          <button 
            className="classification_button" 
            name = "Ciencia"
            value = "Ciencia"
            onClick={handleClick}
          >Ciencia</button>
          <button 
            className="classification_button" 
            name = "Interesante"
            value = "Interesante"
            onClick={handleClick}
          >Interesante</button>
      </div>
    </>
  )
}