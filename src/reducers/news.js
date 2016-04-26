import {combineReducers} from 'redux';
import {cr} from '../utils'
import {RECEIVE_NEWS_LIST, SET_KEYWORD, PAGE_SIZE,SET_CURRENT_NEWS} from 'actions/news'

export default combineReducers({
  list: cr([], {
    [RECEIVE_NEWS_LIST](state, {data}){return data.tngou}
  }),
  totalPage: cr(0, {
    [RECEIVE_NEWS_LIST](state, {data}){return Math.ceil(data.total/PAGE_SIZE)}
  }),
  page: cr(1, {
    [RECEIVE_NEWS_LIST](state, {page}){return page}
  }),
  keyword: cr('', {
    [SET_KEYWORD](state, {value}){return value}
  }),
  current: cr({}, {
  [SET_CURRENT_NEWS](state, {news}){return news}
})
})