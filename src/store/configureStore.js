import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from 'src/reducer/rootReducer';


export default (initialState = {}) => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunkMiddleware,
    ),
  );

  return {
    store,
  };
};
