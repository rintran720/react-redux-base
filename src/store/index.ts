import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const persistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['navigation'] // navigation will not be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];
const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});
const store = createStore(
  persistedReducer /* preloadedState, */,
  composeEnhancers(
    applyMiddleware(...middleware)
    // other store enhancers if any
  )
);
const persistor = persistStore(store);

export { persistor };
export default store;
