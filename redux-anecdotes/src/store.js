import { configureStore } from '@reduxjs/toolkit'
import anecdoteSlice from './reducers/anecdotesReducer'
import filterSlice from './reducers/filterReducer'

const store = configureStore({
    reducer: {
        anecdotes: anecdoteSlice,
        filter: filterSlice
    }
})

export default store