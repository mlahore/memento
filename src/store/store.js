import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { collectionReducer } from '../reducers/collectionReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  collections: collectionReducer
});


export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);