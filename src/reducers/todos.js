const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    date: action.date,
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
            return [...state.slice(0, index), ...state.slice(index + 1)]
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
