import React, {useState} from 'react'

const Count = (props) => {
    const [count, setCount] = useState("click count: 0");

    const changeText = () => {
        setCount("new text")
    }

    return (
        <div>
            {count}
            <button onClick={changeText}>change the text</button>
        </div>
    )
}

export default Count
