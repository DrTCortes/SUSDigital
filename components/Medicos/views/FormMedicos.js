import React, { useState, useContext } from 'react';
import { Text, View, TextInput, StyleSheet, Switch, Alert } from 'react-native';
import Styles from '../../styles';
import Context from '../../context/AppContext';
import {Button, CheckBox, Avatar } from 'react-native-elements';

 import DatePicker from 'react-native-datepicker';

export default ({route, navigation}) => {
    const [medico, setMedico] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(Context)

    function confirmData(medico, borderRed){
        if (medico.name === '' || medico.name === null || medico.name === undefined ){
            Alert.alert( "Dado Incorreto", "O campo 'Nome' não pode estar em branco",
                [{ text: "OK", onPress: () => console.log("OK Pressed") }] )
                {console.log("Adicione Nome ")}

        }else if (medico.email === '' || medico.email === null || medico.email === undefined ){
            
            Alert.alert( "Dado Incorreto", "O campo 'Email' não pode estar em branco",
                [{ text: "OK", onPress: () => console.log("OK Pressed") }] )
            {console.log("Adicione Email")}

        }else if (medico.avatarUrl === '' || medico.avatarUrl === null || medico.avatarUrl === undefined ){
            
            Alert.alert( "Dado Incorreto", "O campo 'Foto' não pode estar em branco",
                [{ text: "OK", onPress: () => console.log("OK Pressed") }] )
            {console.log("Adicione Foto")}
        }else if (medico.crm === '' || medico.crm === null || medico.crm === undefined ){
            
            Alert.alert( "Dado Incorreto", "O campo 'crm' não pode estar em branco",
                [{ text: "OK", onPress: () => console.log("OK Pressed") }] )
            {console.log("Adicione crm")}
        }else if (medico.cpf === '' || medico.cpf === null || medico.cpf === undefined ){
            
            Alert.alert( "Dado Incorreto", "O campo 'cpf' não pode estar em branco",
                [{ text: "OK", onPress: () => console.log("OK Pressed") }] )
            {console.log("Adicione cpf")}    
        }else if (medico.telefone === '' || medico.telefone === null || medico.telefone === undefined ){
            
            Alert.alert( "Dado Incorreto", "O campo 'telefone' não pode estar em branco",
                [{ text: "OK", onPress: () => console.log("OK Pressed") }] )
            {console.log("Adicione telefone")}        
        }else{
                dispatch({
                    type: medico.id ? 'updateMedico' : 'createMedico',
                    payload: medico,
                })
                navigation.goBack()}
    }


    function handleToggle(checkboes) {
          if(checkboes === checkboes) {
            checkboes = !checkboes
            return checkboes
          }
          return !checkboes

      }   

    return (
        //Tela de cadastro do medico
        <View style={Styles.form}>
            <Text>Nome</Text>                        
            <TextInput                 
                onChangeText={name => setMedico({...medico, name})}
                placeholder="Informe o Nome"
                value={medico.name}
                style={Styles.input} 
            />
            <View  style={{flexDirection:'row'}}>  
                <Text>Data de Nascimento    </Text>
                <Text>Médico Ativo?</Text>  
            </View>
            <View  style={{flexDirection:'row'}}>              
                <DatePicker
                    format="DD-MM-YYYY"        
                    date = {medico.nascimento}
                    onDateChange={value => setMedico({...medico, nascimento})}
                    value = {medico.nascimento}
                />                            
                <CheckBox                    
                    checked = {medico.ativo}
                    onPress= {ativo => setMedico({...medico,ativo : handleToggle(medico.ativo) })}
                    tintColors={{ true: '#FC8F00' }}
                    //style={Styles.input}   
                />  
                {/* <Avatar rounded source={medico.avatarUrl && { uri: medico.avatarUrl }}/>  */}
            </View>
                
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
                onPress={() => {confirmData(medico)}}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      padding: 20,
    },
    datePickerStyle: {
      width: 200,
      marginTop: 20,
    },
    avatar: {
        width: 100,
        height: 100,
        marginHorizontal: 20,
        borderRadius: 20,
        backgroundColor: "#fff",
        shadowRadius: 5,
        shadowColor: "red"
        
      },
  });