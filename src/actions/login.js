import {cac} from '../utils'

export const INPUT_USERNAME = 'INPUT_USERNAME'
export const INPUT_PASSWORD = 'INPUT_PASSWORD'

export const inputUsername = cac(INPUT_USERNAME, 'value')
export const inputPassword = cac(INPUT_PASSWORD, 'value')