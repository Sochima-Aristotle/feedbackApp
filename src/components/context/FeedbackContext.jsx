import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) =>{
    
    const[feedBack, setFeedBack] = useState([])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })
    


    // TO ADD FEEDBACK 
    const addFeedBack = async (newFeedback) => {
        const response = await fetch('/feedback', {
            method:"POST",
            headers:{
                "Content-type": "application/json"
            },
            body: JSON.stringify(newFeedback)
        })
        const data = await response.json()
       
    
        setFeedBack([data, ...feedBack]);
      };

      useEffect(()=>{
          fetchFeedback()
      }, [])

    //   fetch feedback 
        const fetchFeedback = async () =>{
            const response = await fetch('/feedback?_sort=id_order=desc')
            const data = await response.json()

            setFeedBack(data)
            
        }
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

    const updateFeedback = async (id, upditem)=>{
        const response = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(upditem)
        })

        const data = await response.json()
        setFeedBack(feedBack.map(item=> item.id===id ?{...item, ...data} : item))
    }
    //   TO DELETE FEEDBACK 
    const deleteFeedback = async (id) => {
        if (window.confirm("Are you sure you want this feedback deleted?")) {
          setFeedBack(feedBack.filter((item) => item.id !== id));
          await fetch(`/feedback/${id}`,{ method: "DELETE"})
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