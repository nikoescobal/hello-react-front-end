import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dataReducer from './redux/dataReducer';

const reducer = combineReducers({
  dataReducer,
});
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
