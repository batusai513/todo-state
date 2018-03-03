import { combineReducers } from 'redux';
import todos from './todos';
import selectedFilter from './selectedFilter';

export default combineReducers({
  todos,
  selectedFilter,
});
