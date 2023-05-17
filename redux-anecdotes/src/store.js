import { createStore, combineReducers } from 'redux'
import anecdotesReducer from './reducers/anecdotesReducer'
import filterReducer from './reducers/filterReducer'

const rootReducer = combineReducers({
    anecdotes: anecdotesReducer,
    filter: filterReducer
})

const store = createStore(rootReducer)

export default store