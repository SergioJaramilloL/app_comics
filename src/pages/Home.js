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
  }, []);
  console.log(data);

  return(
    <>
      <Title></Title>
      <BulletPoint></BulletPoint>
      <Qualification></Qualification>
      <Button></Button>
    </>
  )
}

export default Home;