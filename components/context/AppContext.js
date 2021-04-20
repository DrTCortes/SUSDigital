import React, { createContext, useReducer } from 'react'
import funcs from '../Funcionarios/data'
import especs from '../Especialidades/data'
import pacientes from '../Pacientes/data'

const initialState = { funcs, especs, pacientes }
const UsersContext = createContext({})

const actions = {
    createFunc(state, action) {
        const func = action.payload
        func.id = Math.random()
        return {
            ...state,
            funcs: [...state.funcs, func],
        }
    },
    updateFunc(state, action) {
        const updated = action.payload
        return {
            ...state,
            funcs: state.funcs.map(u => u.id === updated.id ? updated : u)
        }
    },
    deleteFunc(state, action) {
        const func = action.payload
        return {
            ...state,
            funcs: state.funcs.filter(u => u.id !== func.id)
        }
    },

    // Espec

    createEspec(state, action) {
        const espec = action.payload
        espec.id = Math.random()
        return {
            ...state,
            especs: [...state.especs, espec],
        }
    },
    updateEspec(state, action) {
        const updated = action.payload
        return {
            ...state,
            especs: state.especs.map(u => u.id === updated.id ? updated : u)
        }
    },
    deleteEspec(state, action) {
        const espec = action.payload
        return {
            ...state,
            especs: state.especs.filter(u => u.id !== espec.id)
        }
    },
    createPaciente(state, action) {
        const paciente = action.payload
        paciente.id = Math.random()
        return {
            ...state,
            pacientes: [...state.pacientes, paciente],
        }
    },
    updatePaciente(state, action) {
        const updated = action.payload
        return {
            ...state,
            pacientes: state.pacientes.map(u => u.id === updated.id ? updated : u)
        }
    },
    deletePaciente(state, action) {
        const paciente = action.payload
        return {
            ...state,
            pacientes: state.pacientes.filter(u => u.id !== paciente.id)
        }
    },
    
}

export const UsersProvider = props => {

    function reducer(state, action) {
        const fn = actions[action.type]
        return fn ? fn(state, action) : state
    }


    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <UsersContext.Provider value={{ state, dispatch }}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContext