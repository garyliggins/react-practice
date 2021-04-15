import React, {useState} from 'react'

const HookForm = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    // const [submitted, setSubmitted] = useState(false)

        const submitUser = (e) => {
            e.preventDefault();
            const newUser = {firstName, lastName, email, password, confirmPassword}
            console.log(newUser)
            setFirstName("")
            setLastName("")
            setEmail("")
            setPassword("")
            setConfirmPassword("")
            // setSubmitted(true)
        }

        // const formMessage = () => {
        //     if(submitted) {
        //         return "thanks cuh"
        //     } else {
        //         return "fill the form out cuh"
        //     }
        // }
        const nameVal = () => {
          if (firstName < 3) {
              return "more letters cuh"
          
        }


    return (
        <>
            <form onSubmit={submitUser}>
                {/* <h2>{formMessage()}</h2> */}
                <div>
                    
                    <label>first Name:</label>
                    <input type="text" onChange={(e) => {setFirstName(e.target.value)}} value={firstName}/>
                    <p>{nameVal()}</p>
                </div>
                <div>
                    <label>last name:</label>
                    <input type="text" onChange={(e) => {setLastName(e.target.value)}} value={lastName}/>
                </div>
                <div>
                    <label>email:</label>
                    <input type="text" onChange={(e) => {setEmail(e.target.value)}} value={email}/>
                </div>
                <div>
                    <label>password:</label>
                    <input type="text" onChange={(e) => {setPassword(e.target.value)}} value={password}/>
                </div>
                <div>
                    <label>confirm Password:</label>
                    <input type="text" onChange={(e) => {setConfirmPassword(e.target.value)}} value={confirmPassword}/>
                </div>
                    <div>
                        <input type="submit" value="create user"></input>
                    </div>

            </form>


            <h2>{firstName}</h2>
            <h2>{lastName}</h2>
            <h2>{email}</h2>
            <h2>{password}</h2>
            <h2>{confirmPassword}</h2>

        </>
    
    )
        }
    }

export default HookForm
