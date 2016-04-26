import { combineReducers } from 'redux';
import login from './login'
import news from './news'
const reducers = {
  login,news
};
module.exports = combineReducers(reducers);
