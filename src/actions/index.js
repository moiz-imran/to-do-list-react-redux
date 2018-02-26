export const setDate = date => {
    return {
        type: 'SET_DATE_FILTER',
        date
    }
}

export const toggleToDo = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}

export const removeToDo = id => {
    return {
        type: 'REMOVE_TODO',
        id
    }
}