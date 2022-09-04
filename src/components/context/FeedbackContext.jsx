import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) =>{
    const[feedBack, setFeedBack] = useState([
        {
            id: 1,
            text: 'This is coming from Feedback context, but what can one do? It\'s only God can save. Fiat totus tuus',
            rating: 10
        },
        {
            id: 2,
            text: 'This is coming from Feedback context, but what can one do? It\'s only God can save. Fiat totus tuus',
            rating: 5
        },
        {
            id: 3,
            text: 'This is coming from Feedback context, but what can one do? It\'s only God can save. Fiat totus tuus',
            rating: 3
        },
        {
            id: 4,
            text: 'This is coming from Feedback context, but what can one do? It\'s only God can save. Fiat totus tuus',
            rating: 7
        }
        
    ])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })
    


    // TO ADD FEEDBACK 
    const addFeedBack = (newFeedback) => {
        newFeedback.id = uuidv4();
    
        setFeedBack([newFeedback, ...feedBack]);
      };

    //   TO UPDATE THE ITEM 
      const editFeedback = item=>{
        setFeedbackEdit({
            item,
            edit:true
        })
      }
    //   const updateFeedback = (id, upditem)=>{
    //       setFeedBack(
    //           feedback.map(item=> item.id=== id
    //       )
    //   }

    const updateFeedback = (id, upditem)=>{
        setFeedBack(feedBack.map(item=> item.id===id ?{...item, ...upditem} : item))
    }
    //   TO DELETE FEEDBACK 
    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure you want this feedback deleted?")) {
          setFeedBack(feedBack.filter((item) => item.id !== id));
        }
      };
    return<FeedbackContext.Provider value={{
        feedBack,
        deleteFeedback,
        addFeedBack,
        editFeedback,
        feedbackEdit,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext