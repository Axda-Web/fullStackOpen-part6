import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    setAnecdotes: (state, action) => {
      return action.payload
    },
    addVote: (state, action) => {
      return state.map(anecdote => anecdote.id === action.payload ? {...anecdote, votes: anecdote.votes + 1} : anecdote)
    },
    addAnecdote: (state, action) => {
      return [...state, action.payload]
    }
  }
})

export const { setAnecdotes, addVote, addAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer