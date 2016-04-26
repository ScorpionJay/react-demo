import {combineReducers} from 'redux';
import {cr} from '../utils'
import {INPUT_USERNAME, INPUT_PASSWORD} from 'actions/login'

export default combineReducers({
  username: cr('', {
    [INPUT_USERNAME](state, {value}){return value}
  }),
  password: cr('', {
    [INPUT_PASSWORD](state, {value}){return value}
  })
})