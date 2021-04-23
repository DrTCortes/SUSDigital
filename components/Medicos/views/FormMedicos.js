import React, { useState, useContext } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import Styles from '../../styles'
import Context from '../../context/AppContext'
import {Button} from 'react-native-elements'

export default ({route, navigation}) => {
    const [medico, setMedico] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(Context)

    return (
        <View style={Styles.form}>
            <Text>Nome</Text>
            <TextInput                 
                onChangeText={name => setMedico({...medico, name})}
                placeholder="Informe o Nome"
                value={medico.name}
                style={Styles.input} 
            />
            <Text>Email</Text>
            <TextInput                
                onChangeText={email => setMedico({...medico, email})}
                placeholder="Informe o E-mail"
                value={medico.email}
                style={Styles.input} 
            />
            <Text>URL do Avatar</Text>
            <TextInput
                onChangeText={avatarUrl => setMedico({...medico, avatarUrl})}
                placeholder="Informe a URL do Avatar"
                value={medico.avatarUrl}
                style={Styles.input} 
            />
             <Text>CRM</Text>
            <TextInput            
                onChangeText={crm => setMedico({...medico, crm})} 
                placeholder='Informe o CRM'
                value={medico.crm} 
                style={Styles.input}          
            />
            {/* <Text>RG</Text>
            <TextInput            
                onChangeText={rg => setMedico({...medico, rg})} 
                placeholder='Informe o RG'
                value={medico.rg} 
                style={Styles.input}          
            /> */}
            <Text>CPF</Text>
            <TextInput            
                onChangeText={cpf => setMedico({...medico, cpf})} 
                placeholder='Informe o CPF'
                value={medico.cpf} 
                style={Styles.input}          
            />
            {/* <Text>Sexo,</Text>
            <TextInput           
                onChangeText={sexo => setMedico({...medico, sexo})} 
                placeholder='sexo' 
                value={medico.sexo} 
                style={Styles.input}          
            /> */}
            <Text>DDD e Telefone</Text>
            <TextInput           
                onChangeText={telefone => setMedico({...medico, telefone})} 
                placeholder='Informe o telefone' 
                value={medico.telefone} 
                style={Styles.input}          
            />           
            <Button
                style={Styles.button}  
                type='outline'
                title="Salvar"
                onPress={() => {
                    dispatch({
                        type: medico.id ? 'updateMedico' : 'createMedico',
                        payload: medico,
                    })
                    navigation.goBack()
                }}
            />
        </View>
    )
}