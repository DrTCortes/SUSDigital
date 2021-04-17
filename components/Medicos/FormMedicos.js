import React, { useState } from 'react';
import {Text, TextInput, View, Button } from 'react-native';
import Styles from '../styles'

export default ({route, navigation}) => {
    const [medicos, setMedicos] = useState(route.params ? route.params : {})
return (
    <View  style={Styles.form}>
         <Text>Nome</Text>
        <TextInput                     
           onChangeText={name => setMedicos({...medicos, name})} 
           placeholder='Informe o Nome'  
           value={medicos.name}  
           style={Styles.input}     
        />
        <Text>Email</Text>
        <TextInput           
           onChangeText={email => setMedicos({...medicos, email})} 
           placeholder='Informe o E-Mail' 
           value={medicos.email} 
           style={Styles.input}          
        />
        <Text>CRM</Text>
        <TextInput            
           onChangeText={email => setMedicos({...medicos, crm})} 
           placeholder='Informe o CRM'
           value={medicos.crm} 
           style={Styles.input}          
        />
        <Text>RG</Text>
        <TextInput            
           onChangeText={email => setMedicos({...medicos, rg})} 
           placeholder='Informe o RG'
           value={medicos.rg} 
           style={Styles.input}          
        />
        <Text>CPF</Text>
        <TextInput            
           onChangeText={email => setMedicos({...medicos, cpf})} 
           placeholder='Informe o CPF'
           value={medicos.cpf} 
           style={Styles.input}          
        />
        <Text>Sexo,</Text>
        <TextInput           
           onChangeText={email => setMedicos({...medicos, sexo})} 
           placeholder='sexo' 
           value={medicos.sexo} 
           style={Styles.input}          
        />
        <Text>DDD e Telefone</Text>
        <TextInput           
           onChangeText={email => setMedicos({...medicos, telefone})} 
           placeholder='Informe o telefone' 
           value={medicos.telefone} 
           style={Styles.input}          
        />
        <Text>Especialidade</Text>
        <TextInput            
           onChangeText={email => setMedicos({...medicos, especialidade})} 
           placeholder='Informe o especialidade'
           value={medicos.especialidade} 
           style={Styles.input}          
        />       
       
    </View>
)

}

// const style = StyleSheet.create({
//     input: {
//         height: 40,
//         borderColor: 'gray',
//         borderWidth: 1,
//         marginBottom: 10,                
//     }

// })