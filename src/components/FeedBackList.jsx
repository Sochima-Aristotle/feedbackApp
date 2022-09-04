import React, {useContext} from 'react'
import FeedbackItem from './Feedbackitem'
import FeedbackContext from './context/FeedbackContext'


const FeedBackList = () => {
  const { feedBack } = useContext(FeedbackContext)
    if(!feedBack || feedBack.length === 0){
        return <p className="lead">No feedback yet</p>
    }
  return (
    <div className='feedback-list'>
      
       {feedBack.map((item)=>(       
      
           <FeedbackItem key={item.id} item={item} />          
     
       ))}
  
       
    </div>
  )
}

export default FeedBackList