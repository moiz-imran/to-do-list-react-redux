import { connect } from 'react-redux'
import { toggleToDo, removeToDo } from '../actions'
import ToDoList from '../components/ToDoList'

const getVisibleToDos = (todos, filter, date) => {
    const dateFiltered = todos.filter(t => (t.date === date));
    switch (filter) {
        case 'SHOW_COMPLETED':
            return dateFiltered.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return dateFiltered.filter(t => !t.completed)
        case 'SHOW_ALL':
        default:
            return dateFiltered
    }
}

const mapStateToProps = state => {
    return {
        todos: getVisibleToDos(state.todos, state.statusFilter, state.dateFilter),
        date: state.dateFilter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCompleted: id => {
            dispatch(toggleToDo(id))
        },
        onRemoved: id => {
            dispatch(removeToDo(id))
        }
    }
}

const VisibleToDoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoList)

export default VisibleToDoList