import { combineReducers } from 'redux';
import homeViewReducer from './homeViewReducer';

const rootReducer = combineReducers({
  homeViewReducer
});

export type StoreType = ReturnType<typeof rootReducer>;

export default rootReducer;
