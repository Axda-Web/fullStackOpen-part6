import { useMutation, useQueryClient } from 'react-query'
import { createNewAnecdote } from '../requests'
import { useNotificationDispatch } from '../NotificationContext'

const AnecdoteForm = () => {

  const dispatch = useNotificationDispatch()

  const queryClient = useQueryClient()
  const newAnecdoteMutation = useMutation(createNewAnecdote, {
    onSuccess: (newAnecdote) => {
      const anecdotes = queryClient.getQueryData('anecdotes')
      queryClient.setQueryData('anecdotes', anecdotes.concat(newAnecdote))
      dispatch({
        type: 'ADD',
        payload: `Anecdote '${newAnecdote.content}' added`
      })
    },
    onError: (error) => {
      const errorMessage = error?.response?.data?.error
      dispatch({
        type: 'ADD',
        payload: errorMessage
      })
    }
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate(content)
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
