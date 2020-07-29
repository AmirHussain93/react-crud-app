import { combineReducers } from 'redux'
import createEmployeeReducer from './reducers/createEmployee'

const rootReducer = combineReducers({
    createEmployee: createEmployeeReducer
})

export default rootReducer