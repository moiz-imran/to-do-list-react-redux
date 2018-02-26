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

let nextToDoID = 0;
export const addToDo = (title, text, date) => {
    return {
        type: 'ADD_TODO',
        id: nextToDoID++,
        title,
        text,
        date
    }
}