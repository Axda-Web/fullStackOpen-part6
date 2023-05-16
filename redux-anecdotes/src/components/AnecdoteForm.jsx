import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {

    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addAnecdote(e.target.anecdote.value))
        e.target.anecdote.value = ''
      }
    
  return (
    <>
    <h2>create new</h2>
    <form onSubmit={handleSubmit}>
        <div><input type="text" name="anecdote" /></div>
        <button type="submit">create</button>
      </form>
    </>
  )
}
export default AnecdoteForm