const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
const today = new Date().toLocaleDateString('ur', options);

const dateFilter = (state = today, action) => {
    switch (action.type) {
        case 'SET_DATE_FILTER':
            return action.date
        default:
            return state
    }
}

export default dateFilter