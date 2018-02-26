import { combineReducers } from 'redux'
import todos from './todos'
import statusFilter from './statusFilter'
import dateFilter from './dateFilter'

const todoApp = combineReducers({
    todos,
    statusFilter,
    dateFilter
})

export default todoApp