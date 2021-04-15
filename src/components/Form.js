import React, {useState} from 'react'

const Form = ({message,setMessage}) => {
    
    
    const formSubmit = (e) => {
        e.preventDefault()
        const newMessage = {message}
        console.log(newMessage)
        setMessage("");
    } 


    
    return(
        <form onSubmit={formSubmit} >
            <label>Write Message here</label>
            <input onChange={(e) => setMessage(e.target.value)} type="textArea" value={message}/>
            <button type="submit">submit</button>
        </form>
    );
}

export default Form
