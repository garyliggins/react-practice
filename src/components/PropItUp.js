import React from 'react'

const PropItUp = ({name,age,hairColor}) => {
    return (
        <div>
        <h1>{name}</h1>
        <p>Age: {age}</p>
        <p> Hair Color: {hairColor}</p>
        </div>
    )
}

export default PropItUp

