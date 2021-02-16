import './styles/Qualification.scss'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Qualification() {
  return(
    <form>
      <p>
        <input id="radio1" type="radio" name="stars" value="5"/>
          <label htmlFor="radio1"><FontAwesomeIcon icon={faStar}/></label>
        <input id="radio2" type="radio" name="stars" value="4"/>
          <label htmlFor="radio2"><FontAwesomeIcon icon={faStar}/></label>
        <input id="radio3" type="radio" name="stars" value="3"/>
          <label htmlFor="radio3"><FontAwesomeIcon icon={faStar}/></label>
        <input id="radio4" type="radio" name="stars" value="2"/>
          <label htmlFor="radio4"><FontAwesomeIcon icon={faStar}/></label>
        <input id="radio5" type="radio" name="stars" value="1"/>
          <label htmlFor="radio5"><FontAwesomeIcon icon={faStar}/></label>
      </p>
    </form>
  )
}
