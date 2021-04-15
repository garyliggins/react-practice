import React, {useState} from 'react'

const LectureForm = (props) => {
  
    return (
        <form>
           
           <div>
               <label>first name</label>
               <input onChange={(e) => props.setFirstName(e.target.value)} type="text" name="firstName" placeholder="first name"/>
           </div>
           <div>
               <label>last name</label>
               <input onChange={(e) => props.setLastName(e.target.value)}  type="text" name="lastName" placeholder="last name"/>
           </div>
           <div>
               <label>email</label>
               <input onChange={(e) => props.setEmail(e.target.value)}  type="text" name="email" placeholder="email"/>
           </div>
           <div>
               <label>password</label>
               <input onChange={(e) => props.setPassword(e.target.value)}  type="password" name="password" placeholder="password"/>
           </div>
        </form>
    )
}

export default LectureForm 
