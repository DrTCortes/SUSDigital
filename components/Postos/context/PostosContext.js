import React, { createContext, useReducer } from 'react'
import postos from '../data/postos'

const initialState = { postos }
const PostosContext = createContext({})

const actions = {
    createPosto(state, action) {
        const posto = action.payload
        posto.id = Math.random()
        return {
            ...state,
            postos: [...state.postos, posto],
        }
    },
    updatePostos(state, action) {
        const updated = action.payload
        return {
            ...state,
            postos: state.postos.map(u => u.id === updated.id ? updated : u)
        }
    },
    deletePostos(state, action) {
        const user = action.payload
        return {
            ...state,
            postos: state.postos.filter(u => u.id !== user.id)
        }
    }
}

export const PostosProvider = props => {

    function reducer(state, action) {
        const fn = actions[action.type]
        return fn ? fn(state, action) : state
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <PostosContext.Provider value={{ state, dispatch }}>
            {props.children}
        </PostosContext.Provider>
    )
}

export default PostosContext