import { useSelector } from 'react-redux'
import { selectNotification } from '../reducers/notificationReducer'

const Notification = () => {
  const notification = useSelector(selectNotification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 20
  }
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification