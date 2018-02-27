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

export const addToDo = (title, text, date) => {
    return {
        type: 'ADD_TODO',
        id: Math.random(),
        title,
        text,
        date
    }
}

export const setStatusFilter = filter => {
    return {
        type: 'SET_STATUS_FILTER',
        filter
    }
}