import { useParams } from 'react-router-dom'

const EventDetails = () => {
  const {id} = useParams()
  return (
    <div>
      event details of {id}
    </div>
  )
}

export default EventDetails
