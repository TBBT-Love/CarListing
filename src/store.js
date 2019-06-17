
//import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';



// export default function configureStore(initialState={}) {
//  return createStore(
//    rootReducer,
//    initialState,
//    applyMiddleware(thunk)
//  );
//}



import { createStore, applyMiddleware } from 'redux';
//import logger from 'redux-logger';

// import reducers from './reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;