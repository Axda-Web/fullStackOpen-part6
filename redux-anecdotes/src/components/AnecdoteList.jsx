import { useSelector } from 'react-redux'

import Anecdote from './Anecdote'
const AnecdoteList = () => {

  const anecdotes = useSelector(state => state)

  return (
    <div>
      {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
        <Anecdote key={anecdote.id} {...anecdote} />
      )}
    </div>
  )
}
export default AnecdoteList