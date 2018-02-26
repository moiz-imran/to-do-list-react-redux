const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'REMOVE_TODO':
            let index;
            state.forEach((todo, i) => {
                if (todo.id === action.id) {
                    index = i;
                }
            })
            return [...todo.slice(0, index), ...todo.slice(index + 1)]
        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        default:
            return state
    }
}

export default todos
