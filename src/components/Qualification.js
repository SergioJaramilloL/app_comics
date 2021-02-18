import './styles/Qualification.scss'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setQualification } from '../store/actions/Home.action';
import { useDispatch } from 'react-redux';



export function Qualification() {
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const { name, value } = event.target;
    switch(name) {
      case 'start1':
        dispatch(setQualification(value));
        break;
      case 'star2':
        dispatch(setQualification(value));
        break;
      case 'star3':
        dispatch(setQualification(value));
        break;
      case 'star4':
        dispatch(setQualification(value));
        break;
      case 'star5':
        dispatch(setQualification(value));
        break;
      default: break;
    }
  };
  

  return(
    <div className="container_qualification">
      <h4 className="statement">Califica tu comic:</h4>
      <p>
        <input id="radio1" type="radio" name="star5" value="5" onChange={handleChange}/>
          <label htmlFor="radio1"><FontAwesomeIcon icon={faStar}/></label>
        <input id="radio2" type="radio" name="star4" value="4" onChange={handleChange}/>
          <label htmlFor="radio2"><FontAwesomeIcon icon={faStar}/></label>
        <input id="radio3" type="radio" name="star3" value="3" onChange={handleChange}/>
          <label htmlFor="radio3"><FontAwesomeIcon icon={faStar}/></label>
        <input id="radio4" type="radio" name="star2" value="2" onChange={handleChange}/>
          <label htmlFor="radio4"><FontAwesomeIcon icon={faStar}/></label>
        <input id="radio5" type="radio" name="star1" value="1" onChange={handleChange}/>
          <label htmlFor="radio5"><FontAwesomeIcon icon={faStar}/></label>
      </p>
    </div>
  )
}
