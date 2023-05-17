const initialState = ''

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return action.payload
        default:
            return state
    }
}

// Selectors
export const selectFilter = state => state.filter

// Action creators
export const filterChange = filter => ({
    type: 'SET_FILTER',
    payload: filter
})

export default filterReducer