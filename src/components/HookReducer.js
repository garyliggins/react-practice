import React, {useReducer} from 'react'

const reducer=(state,action) => {
    switch(action.type){
        case "increment":
            return state + 1
        case "decrement":
            return state - 1
            default: 
            return state
    }
}

const HookReducer = () => {
    const [count, dispatch] = useReducer(reducer, 0)

    return (
        <div>
            <div>
                count: {count}
            </div>
            <button onClick={() => dispatch({type: "increment"})}>increment</button>
            <button onClick={() => dispatch({type: "decrement"})}>decrement</button>
            
        </div>
    )
}

export default HookReducer
