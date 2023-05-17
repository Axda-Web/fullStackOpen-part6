import { useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdotesReducer'

const Anecdote = ({id, content, votes}) => {

    const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(addVote(id))
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