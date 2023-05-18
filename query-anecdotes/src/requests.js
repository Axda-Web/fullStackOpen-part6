import axios from 'axios'

const BASE_URL = 'http://localhost:3001/anecdotes'

export const getAnecdotes = async () => {
    const response = await axios.get(BASE_URL)
    return response.data
}