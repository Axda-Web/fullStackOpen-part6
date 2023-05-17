import { useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdotesReducer'
import { setNotification, removeNotification } from '../reducers/notificationReducer'


const Anecdote = ({id, content, votes}) => {

    const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(addVote(id))
    dispatch(setNotification(`You voted '${content}'`))
    setTimeout(() => {
        dispatch(removeNotification())
    }, 5000)
  }

  return (
    <div key={id}>
          <div>
            {content}
          </div>
          <div>
            has {votes}
            <button onClick={() => vote(id)}>vote</button>
          </div>
        </div>
  )
}
export default Anecdote