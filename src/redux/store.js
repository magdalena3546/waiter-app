import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';
import initialState from './initialState';
import tablesReducer from './tablesRedux';
import thunk from 'redux-thunk';
import statusesReducer from './statusesRedux';

const subreducers = {
  tables: tablesReducer,
  statuses: statusesReducer,
};

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

export default store;