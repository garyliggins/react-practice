import React, {useReducer, useState} from 'react'

function reducer(state,action) {
    switch (action.type) {
        case "add-todo":
            return {todos: [...state.todos, {text: action.text, completed: false}]}
    }

}


const ReducerToDo = () => {
    const [{todos}, dispatch] = useReducer(reducer, {todos: []})
    const [text,settext] = useState("")

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                dispatch({type: 'add-todo', text })
                settext("")
            }}> 
                <input value={text} onChange={e => settext(e.target.value)} />            
            </form>
           {todos.map(t => (
           <div key={t.text}>{t.text}</div>
           ))}
        </div>
    )
}

export default ReducerToDo
