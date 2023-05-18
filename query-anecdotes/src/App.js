import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery } from 'react-query'
import { getAnecdotes } from './requests'

const App = () => {

  const { data: anecdotes, isError, isLoading } = useQuery('anecdotes', getAnecdotes)

  if (isLoading) {
    return <div>Loading...</div>
  }
  
  if (isError) {
    return <div>Annecdote service not available due to problems in server</div>
  }

  const handleVote = (anecdote) => {
    console.log('vote')
  }


  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
