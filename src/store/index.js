import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { homeReducer } from './reducers/Home.reducer';

const rootReducer = combineReducers({
  homeReducer
})
const middlewares = applyMiddleware(thunk);

export const store = createStore(rootReducer, middlewares);
