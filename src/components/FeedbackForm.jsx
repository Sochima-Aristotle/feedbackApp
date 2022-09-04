import { isDisabled } from '@testing-library/user-event/dist/utils'
import React, {useState, useContext, useEffect} from 'react'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'
import Card from './shared/Card'
import FeedbackContext from './context/FeedbackContext'



function FeedbackForm() {
     const [text, setText] = useState('')
     const [rating, setRating] = useState(10)
     const [btnDisabled, setBtnDisabled] = useState(true)
     const [message, setMessage] = useState('')

     const {addFeedBack, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

      useEffect(()=>{

       if(feedbackEdit.edit=== true){
         setBtnDisabled(false);
         setText(feedbackEdit.item.text)
         setRating(feedbackEdit.item.rating)

       }
      }, [feedbackEdit])

    const handleText = e=>{
        e.preventDefault()
      setText(e.target.value);
      if(text ===''){
        setBtnDisabled(true)
        setMessage(null)
      }else if(text !== '' && text.trim().length <=10){
        setMessage('Text must be atleast 10 characters')
        setBtnDisabled(true)
      }else{
        setMessage(null)
        setBtnDisabled(false)
      }
    }

    const handleSubmit = e =>{
      e.preventDefault()
      if(text.trim().length >10){
        const newFeedback ={
          text,
          rating
        }

        if(feedbackEdit.edit === true){
          updateFeedback(feedbackEdit.item.id, newFeedback)
        }else{
          
          addFeedBack(newFeedback)
        }
        setText('')
      }
    }

  return (
    <Card reverse={false} >
      <form onSubmit={handleSubmit}>

        <h2 style={{paddingBottom: '0.7rem'}}>How would you rate our service with you?</h2>
        <RatingSelect select={(rating)=> setRating(rating)}/>
        <div className="input-group">
            <input onChange={handleText} type="text" value={text} placeholder='Please write a review..'/>
           <Button type="submit" isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>

    </Card>
  )
}

export default FeedbackForm