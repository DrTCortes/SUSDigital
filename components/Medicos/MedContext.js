import React, { createContext } from 'react'
import dataMed from './data'

const MedContext = createContext({})

export const MedProvider = props => {
    return (
        <MedContext.Provider value= {{
            staate:{
                dataMed
            }
        }}> 
            {props.children}
        </MedContext.Provider>
    )
}

export default MedContext