import { useSelector } from 'react-redux'
import { selectFilter } from '../reducers/filterReducer'

import Anecdote from './Anecdote'
const AnecdoteList = () => {

  const filter = useSelector(selectFilter)
  const anecdotes = useSelector(state => state.anecdotes)

  const filteredAnecdotes = anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))


  return (
    <div>
      {filteredAnecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
        <Anecdote key={anecdote.id} {...anecdote} />
      )}
    </div>
  )
}
export default AnecdoteList