import axios from 'axios';

import {
  COMIC_LOADING,
  COMIC_FINISHED,
  COMIC_DATA,
  COMIC_FAILURE
} from '../reducers/Home.reducer';

export function getComicData(){
  return async function (dispatch){
    const rand = Math.floor(Math.random() * (2424 - 1)) + 1;
    dispatch({ type: COMIC_LOADING });
    try{
      const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}${rand}`);
      dispatch({ type: COMIC_DATA, payload: data });
    } catch (error) {
      dispatch({ type:COMIC_FAILURE, payload: error });
    } finally {
      dispatch({ type: COMIC_FINISHED });
    }
  }
}

// export function getComicData(){
//   const proxyUrl = 'https://cors-anywhere.herokuapp.com';
//   const url = 'http://xkcd.com/614/info.0.json';
//   return async function (dispatch, url, options = {} ){
//     dispatch({ type: COMIC_LOADING });
//     try{
//       const { data } = await axios.get(`${proxyUrl}/${url}`, {
//         ...options,
//         headers: {
//           ...options.headers,
//           'X-Requested-With': 'wololo',
//         }, 
//       })
//       console.log('action', data);
//       dispatch({ type: COMIC_DATA, payload: data });
//     } catch (error) {
//       console.log('entro al catch')
//       dispatch({ type:COMIC_FAILURE, payload: error });
//     } finally {
//       dispatch({ type: COMIC_FINISHED });
//     }
//   }
// }

// export function getComicData(){
  
//   return async function (dispatch){
//     dispatch({ type: COMIC_LOADING });
//     try{
//       const { data } = await axios ({
//         method: 'GET',
//         dataType: 'jsonp',
//         data: {},
//         url: 'http://xkcd.com/614/info.0.json',
//       })
//       console.log('action', data);
//       dispatch({ type: COMIC_DATA, payload: data });
//     } catch (error) {
//       console.log('entro al catch')
//       dispatch({ type:COMIC_FAILURE, payload: error });
//     } finally {
//       dispatch({ type: COMIC_FINISHED });
//     }
//   }
// }