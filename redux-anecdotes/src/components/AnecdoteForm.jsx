import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdotesReducer'
import { setNotification, removeNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {

    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addAnecdote(e.target.anecdote.value))
        dispatch(setNotification(`Anecdote '${e.target.anecdote.value}' added`))
        setTimeout(() => {
            dispatch(removeNotification())
        }, 5000)
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