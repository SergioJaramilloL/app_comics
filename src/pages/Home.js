import '../components/styles/Home.scss';
import { BulletPoint } from '../components/BulletPoint';
import { Title } from '../components/Title';
import { Qualification } from '../components/Qualification';
import { ButtonAdd, ButtonNext } from '../components/Button';
import { Classification } from '../components/Classification';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComicData } from '../store/actions/Home.action';

function Home() {
  const dispatch = useDispatch();
  const data = useSelector(
    ({ homeReducer: { ...state } }) => {
      return { ...state }
  });

  useEffect(() => {
    dispatch(getComicData());
  }, [dispatch]);

  function handleAddFavorites(event) {
    event.preventDefault();
  }

  async function handleNextComic(event) {
    event.preventDefault();
    dispatch(getComicData());
  }

  return(
    <div>
      <p>
        <Title
          titleComic = {data.comicData.title}
          yearComic = {data.comicData.year}
        />
      </p>
      <div className="container">
        <BulletPoint
          urlComic = {data.comicData.img}
          altComic = {data.comicData.alt}
        />
        <div className="container_interactive">
          <div className="interactive_classification">
            <Classification></Classification>
          </div>
          <div>
            <Qualification></Qualification>
          </div>
        </div>
        <div className="container_buttons">
          <ButtonAdd
            handleAddFavorites = {handleAddFavorites}
          />
          <ButtonNext
            handleNextComic = {handleNextComic}
          />
        </div>
      </div>
    </div>
  )
}

export default Home;