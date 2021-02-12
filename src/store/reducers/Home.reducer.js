export const COMIC_LOADING = 'COMIC_LOADING';
export const COMIC_FINISHED = 'COMIC_FINISHED';
export const COMIC_DATA = 'COMIC_DATA';
export const COMIC_FAILURE = 'COMIC_FAILURE';

export const initialState = {
  comicData: {},
  loading: false,
  error: '',
 }
 
 export function homeReducer (state = initialState, action) {
   switch (action.type){
     case COMIC_DATA:
       return {
         ...state,
         comicData: action.payload
       }
     case COMIC_LOADING:
       return {
         ...state,
         loading: true
       }
     case COMIC_FINISHED:  
       return {
         ...state,
         loading: false
       }
     case COMIC_FAILURE:
       return {
         ...state,
         error: action.payload
       }
     default:
       return state
   }
 }