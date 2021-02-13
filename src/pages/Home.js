import { BulletPoint } from '../components/BulletPoint';
import { Title } from '../components/Title';
import { Qualification } from '../components/Qualification/Qualification';
import { Button } from '../components/Button';
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
    dispatch(getComicData())
  }, [dispatch]);

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
      <Button
        functionButton= {'Añadir a favoritos'}
      />
      <Button
        functionButton= {'Siguiente Comic'}
      />
    </>
  )
}

export default Home;