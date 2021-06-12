import React, { createContext, useReducer } from 'react'
import db from '../db/db'
import axios from 'axios' 
 

 const getData = async() => {
    try {         
        const medicos = await axios.get('http://localhost:3004/medicos')               
        const funcs = await axios.get('http://localhost:3004/funcionarios') 
        const especs = await axios.get('http://localhost:3004/especialidades') 
        const pacientes = await axios.get('http://localhost:3004/pacientes') 
        const postos = await axios.get('http://localhost:3004/postos') 
        const consultas = await axios.get('http://localhost:3004/consultas') 
        
        return JSON.stringify(data) 
    } catch(e) {           
    }
} 

const medicos = db.medicos
const funcs = db.funcionarios
const especs = db.especialidades
const pacientes = db.pacientes
const postos = db.postos
const consultas = db.consultas

const initialState = { funcs, especs, pacientes, postos, medicos, consultas }
const UsersContext = createContext({})

const setEnvioMed = async (medico) => {        
    try {
    await axios.post('http://localhost:3004/medicos',{
        type: medico.type,
        name: medico.name,
        email: medico.email,
        crm: medico.crm,
        rg: medico.rg,
        cpf: medico.cpf,
        sexo: medico.sexo,
        telefone: medico.telefone,
        nascimento : medico.nascimento,
        ativo : medico.ativo,
        posto:  medico.posto,
        espec:  medico.espec,
        avatarUrl: medico.avatarUrl
    })
    
    // showSuccess('Medico cadastrado')
    } catch(e){
    } 
}
const setAlteracaoMed = async (medico) => {  
try {
    // console.warn(user)
    await axios.put(`http://localhost:3004/medicos/${medico.id}`,{
        type: medico.type,
        name: medico.name,
        email: medico.email,
        crm: medico.crm,
        rg: medico.rg,
        cpf: medico.cpf,
        sexo: medico.sexo,
        telefone: medico.telefone,
        nascimento : medico.nascimento,
        ativo : medico.ativo,
        posto:  medico.posto,
        espec:  medico.espec,
        avatarUrl: medico.avatarUrl
   })
    
  } catch(e){
    //   showError(e)
  } 
}

const DeleteMed = async (medico) => {
    try {
        await axios.delete(`http://localhost:3004/medicos/${medico.id}`)
    } catch(e) {
        // showError(e)
    }
}


const actions = {
    // Actions para Crição, Update e Delete de Funcionarios    

    // createFunc(state, action) {
    //     const func = action.payload
    //     func.type = 'funcionario'
    //     setFunc(func)
    //     return 0
    // },
    // updateFunc(state, action) {
    //     const updated = action.payload
    //     return {
    //         ...state,
    //         funcs: state.funcs.map(u => u.id === updated.id ? updated : u)
    //     }
    // },
    // deleteFunc(state, action) {
    //     const func = action.payload
    //     return {
    //         ...state,
    //         funcs: state.funcs.filter(u => u.id !== func.id)
    //     }
    // },
    async createFunc(state, action) {
        const func = action.payload;
        try {
            await axios.post('http://localhost:3004/funcionarios',{
                type: func.type,
                name: func.name,
                email: func.email,
                isEnabled: func.isEnabled,
                posto: func.posto,
                paciente: func.paciente,
                avatarUrl: func.avatarUrl
            })
            } catch(e){
            } 
    },

    async updateFunc(state, action) {  
        const func = action.payload
        try {
            // console.warn(user)
            await axios.put(`http://localhost:3004/funcionarios/${func.id}`,{
                type: func.type,
                name: func.name,
                email: func.email,
                isEnabled: func.isEnabled,
                posto: func.posto,
                paciente: func.paciente,
                avatarUrl: func.avatarUrl

           })
            
          } catch(e){
            //   showError(e)
          } 
        },

    async deleteFunc(state, action) {
        const func = action.payload
        try {
            await axios.delete(`http://localhost:3004/funcionarios/${func.id}`)
        } catch(e) {
            // showError(e)
        }
    },

    // Especialidades
    
    createEspec(state, action) {
        const espec = action.payload
        espec.id = Math.random()
        espec.type = 'especialidade'
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


    async createEspec(state, action) {
        const espec = action.payload;
        // const EspecialidadePreviusIndex = state.postos.length - 1;
        try {
            const data = {
                type: espec.type,
                name: espec.name,
                descricao: espec.descricao,
                avatarUrl: espec.avatarUrl,
                posto: espec.posto,
                medico: espec.medico,
                isEnabled: espec.isEnabled
            }
            await fetch('http://localhost:3004/especialidades', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            })
            return 0;
        } catch (error) {
            console.error(error);
        }
    },

    async updateEspec(state, action) {  
        const espec = action.payload
        try {
            // console.warn(user)
            await axios.put(`http://localhost:3004/especialidades/${espec.id}`,{
                type: espec.type,
                name: espec.name,
                descricao: espec.descricao,
                avatarUrl: espec.avatarUrl,
                posto: espec.posto,
                medico: espec.medico,
                isEnabled: espec.isEnabled
           })
            
          } catch(e){
            //   showError(e)
          } 
        },

    async deleteEspec(state, action) {
        const espec = action.payload
        try {
            await axios.delete(`http://localhost:3004/especialidades/${espec.id}`)
        } catch(e) {
            // showError(e)
        }
    },



    // Pacientes

    createPaciente(state, action) {
        const paciente = action.payload
        paciente.id = Math.random()
        paciente.type = 'paciente'
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

    async createPaciente(state, action) {
        const paciente = action.payload;
        try {
            await axios.post('http://localhost:3004/pacientes',{
                type: paciente.type,
                name: paciente.name,
                cpf: paciente.cpf,
                cns: paciente.cns,
                sexo: paciente.sexo,
                email: paciente.email,
                dn: paciente.dn,
                posto: paciente.posto,
                especialidade: paciente.paciente,
                avatarUrl: paciente.avatarUrl
            })
            } catch(e){
            } 
    },

    async updatePaciente(state, action) {  
        const paciente = action.payload
        try {
            // console.warn(user)
            await axios.put(`http://localhost:3004/pacientes/${paciente.id}`,{
                type: paciente.type,
                name: paciente.name,
                cpf: paciente.cpf,
                cns: paciente.cns,
                sexo: paciente.sexo,
                email: paciente.email,
                dn: paciente.dn,
                posto: paciente.posto,
                especialidade: paciente.paciente,
                avatarUrl: paciente.avatarUrl

           })
            
          } catch(e){
            //   showError(e)
          } 
        },

    async deletePaciente(state, action) {
        const paciente = action.payload
        try {
            await axios.delete(`http://localhost:3004/pacientes/${paciente.id}`)
        } catch(e) {
            // showError(e)
        }
    },

    // Postos

    async createPosto(state, action) {
        const {
            avatarUrl,
            cep,
            cidade,
            endereco,
            especialidadeposto,
            estado,
            name,
        } = action.payload;
        const postoPreviusIndex = state.postos.length - 1;
        try {
            const data = {
                type: "posto",
                isEnabled: "true",
                avatarUrl,
                cep,
                cidade,
                endereco,
                especialidadeposto,
                estado,
                name,
            }
            await fetch('http://localhost:3004/postos', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            })

            return 0;
        } catch (error) {
            console.error(error);
        }
    },
    // updatePosto(state, action) {
    //     const updated = action.payload
    //     return {
    //         ...state,
    //         postos: state.postos.map(u => u.id === updated.id ? updated : u)
    //     }
    // },

    async updatePosto(state, action) {  
        const posto = action.payload
        try {
            // console.warn(user)
            await axios.put(`http://localhost:3004/postos/${posto.id}`,{
                type: posto.type,
                name: posto.name,
                especialidadeposto: posto.especialidadeposto,
                isEnabled: "true",
                cep: posto.cep,
                cidade: posto.cidade,
                endereco: posto.endereco,
                estado: posto.estado,
                avatarUrl: posto.avatarUrl,
           })
            
          } catch(e){
            //   showError(e)
          } 
        },

    // deletePosto(state, action) {
    //     const posto = action.payload
    //     return {
    //         ...state,
    //         postos: state.postos.filter(u => u.id !== posto.id)
    //     }
    // },

    async deletePosto(state, action) {
        const posto = action.payload
        try {
            await axios.delete(`http://localhost:3004/postos/${posto.id}`)
        } catch(e) {
            // showError(e)
        }
    },


    //Medicos

    createMedico(state, action) {
        const medico = action.payload
        // medico.id = Math.random() //gera o id do medico
        
        medico.type = 'medico'
        setEnvioMed(medico)
        return 0 //{ //retorna estado e informações do medico cadasttrado
            
            // ...state,
            // medicos: [...state.medicos, medico],
        // }
    },
    updateMedico(state, action) {
        const updated = action.payload
        setAlteracaoMed(updated)
        return 0 //{
        //     ...state,
        //     medicos: state.medicos.map(u => u.id === updated.id ? updated : u)
        // }
    },
    
    deleteMedico(state, action) {
        const medico = action.payload
        DeleteMed(medico)
        return 0 //{
        //     ...state,
        //     medicos: state.medicos.filter(u => u.id !== medico.id)
        // }
    },
    createConsulta(state, action) {
        const consulta = action.payload
        consulta.c_id = Math.random()
        return {
            ...state,
            consultas: [...state.consultas, consulta],
        }
    },
    updateConsulta(state, action) {
        const updated = action.payload
        return {
            ...state,
            consultas: state.consultas.map(u => u.c_id === updated.c_id ? updated : u)
        }
    },
    deleteConsulta(state, action) {
        const consulta = action.payload
        return {
            ...state,
            consultas: state.consultas.filter(u => u.c_id !== consulta.c_id)
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