import { BulletPoint } from '../components/BulletPoint';
import { Title } from '../components/Title';
import { Qualification } from '../components/Qualification/Qualification';
import { ButtonAdd, ButtonNext } from '../components/Button';
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
    <>
      <Title
        titleComic = {data.comicData.title}
        yearComic = {data.comicData.year}
      />
      <BulletPoint
        urlComic = {data.comicData.img}
        altComic = {data.comicData.alt}
      />
      <Qualification></Qualification>
      <ButtonAdd
        functionButton = {'Añadir a favoritos'}
        handleAddFavorites = {handleAddFavorites}
      />
      <ButtonNext
        functionButton = {'Siguiente Comic'}
        handleNextComic = {handleNextComic}
      />
    </>
  )
}

export default Home;