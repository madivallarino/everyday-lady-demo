import React, { useState } from 'react';


const PastItem = ({item, deleteFromList, userId}) => {

const [show, setShow ] = useState(false);
const [reviewText, setReviewText] = useState("");
const [starRating, setStarRating ] = useState("");
const [showing, setShowing ] = useState(false);
const [formShow, setFormShow] = useState(false);


function handleSubmit(e, item){
  
        e.preventDefault()
        const newReview= { 
            review: reviewText,
            star_rating: starRating, 
            product_name: item.name,
            user_id: userId,
        }
        fetch('/addreview', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify(newReview)
        }).then((r)=> r.json())
        .then(data => {
            console.log(data)
            setReviewText("")
           setShowing(true)
        })
        

    }    



    return (
       
        <div className="pastitem">
         
            <h3>{item.name}</h3>
            {show ? null :  <button onClick={()=> {setShow(true)
                                                   setFormShow(true) }}>Leave A Review</button>}
            {show ? null: <img src={item.image} alt="shownull"/> } 
            
            
            {formShow ? <form onSubmit={(e) => handleSubmit(e, item)}>
            <label>Leave Your Review: </label><br/>
                    <select onChange={(e)=> setStarRating(e.target.value)}>
                    <option> Star Rating: </option> 
            <option value="1">⭐</option> 
            <option value="2">⭐⭐</option> 
            <option value="3">⭐⭐⭐</option> 
            <option value="4">⭐⭐⭐⭐</option> 
            <option value="5">⭐⭐⭐⭐⭐</option> 
       </select><br/>
           <textarea className="review-post-textbox" type="text" placeholder="Your review here..." value={reviewText} onChange={(e)=> setReviewText(e.target.value)} rows={6}></textarea><br/>
            <button className="add-review-button" type="button" value="Add Your Post" onClick={(e)=> {
                        setFormShow(false)
                        setShowing(true)
                        handleSubmit(e, item)
            }}>Add Review</button></form> : null}
           {showing ? <h3> Thanks for your review! </h3> : null}
           </div>
        
    )
}

export default PastItem