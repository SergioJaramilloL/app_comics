import axios from 'axios';

import {
  COMIC_LOADING,
  COMIC_FINISHED,
  COMIC_DATA,
  COMIC_FAILURE,
  COMIC_CLASSIFICATION,
  COMIC_QUALIFICATION
} from '../reducers/Home.reducer';

export function getComicData(){
  return async function (dispatch){
    const rand = Math.floor(Math.random() * (2424 - 1)) + 1;
    const BASE_URL= process.env.REACT_APP_BASE_URL
    dispatch({ type: COMIC_LOADING });
    try{
      const { data } = await axios.get(`${BASE_URL}${rand}`);
      dispatch({ type: COMIC_DATA, payload: data });
      dispatch({ type: COMIC_QUALIFICATION, payload: '' });
      dispatch({ type: COMIC_CLASSIFICATION, payload: '' });
    } catch (error) {
      dispatch({ type:COMIC_FAILURE, payload: error });
    } finally {
      dispatch({ type: COMIC_FINISHED });
    }
  }
}

export function setQualification(value) {
  return function (dispatch){
    dispatch({ type: COMIC_QUALIFICATION, payload: value });
  }
}

export function setClassification(value) {
  return function (dispatch){
    dispatch({ type: COMIC_CLASSIFICATION, payload: value });
  }
}
