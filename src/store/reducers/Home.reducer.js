export const COMIC_LOADING = 'COMIC_LOADING';
export const COMIC_FINISHED = 'COMIC_FINISHED';
export const COMIC_DATA = 'COMIC_DATA';
export const COMIC_FAILURE = 'COMIC_FAILURE';
export const COMIC_CLASSIFICATION = 'COMIC_CLASSIFICATION';
export const COMIC_QUALIFICATION = 'COMIC_QUALIFICATION';

export const initialState = {
  comicData: {},
  loading: false,
  classification: '',
  qualification: '',
  error: ''
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
      case COMIC_CLASSIFICATION:
        return{
          ...state,
          classification: action.payload
        }
      case COMIC_QUALIFICATION:
        return{
          ...state,
          qualification: action.payload
        }
     default:
       return state
   }
 }