import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import thunk, { ThunkDispatch } from 'redux-thunk';
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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = ThunkDispatch<RootState, undefined, any>;
