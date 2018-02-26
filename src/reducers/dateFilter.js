const dateFilter = (state = '1970/01/01', action) => {
    switch (action.type) {
        case 'SET_DATE_FILTER':
            return action.date
        default:
            const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
            return new Date().toLocaleDateString('ur', options)
    }
}

export default dateFilter