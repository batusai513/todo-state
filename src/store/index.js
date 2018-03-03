import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import mainReducer from '../modules/reducer';
import initialState from './initialState';

export default createStore(
  mainReducer,
  initialState,
  applyMiddleware(createLogger())
);
