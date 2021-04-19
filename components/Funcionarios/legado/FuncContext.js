import React, {createContext, useReducer} from 'react'
import funcs from './data'

const initialState = {funcs}
const FuncsContext = createContext({})

export const FuncsProvider = props => {

    function reducer(state, action){
        if(action.type === 'deletFunc'){
            const func = action.payload
        
        return {
            funcs: state.funcs.filter(u => u.id !== func.id)
        }
    }
    return state
}
    

    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <FuncsContext.Provider value={{state, dispatch}}>
            {props.childrem}
        </FuncsContext.Provider>
    )

    }
export default FuncsContext
