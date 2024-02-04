import { FaTimes, FaEdit } from 'react-icons/fa'
import React, { useContext } from "react"
import Card from "./shared/Card"
import FeedbackContext from './context/FeedbackContext'

function Feedback({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext)

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color='white' />
      </button>
      <button className='edit' onClick={() => editFeedback(item)}>
        <FaEdit color='white' />
      </button>

      <div className="text-display">
        {item.text}
      </div>
    </Card>
  )
}

export default Feedback