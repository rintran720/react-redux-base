import { combineReducers } from 'redux';
import homeViewReducer from './homeView.reducer';

const rootReducer = combineReducers({
  homeView: homeViewReducer
});

export type StoreType = ReturnType<typeof rootReducer>;

export default rootReducer;
