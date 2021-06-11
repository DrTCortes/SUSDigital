import React, { useState, useContext } from 'react'
import { Text, View, TextInput, Switch, Alert, CheckBox } from 'react-native'
import {Button, Slider} from 'react-native-elements'

import AppContext from '../../context/AppContext'
import Styles from '../../styles'

export default ({route, navigation}) => {
    const [func, setFunc] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(AppContext)

    function confirmData(func){
        if (func.name === '' || func.name === null || func.name === undefined ){
            Alert.alert( "Dado Incorreto", "O campo 'Nome' não pode estar em branco",
                [{ text: "OK"}] )

        }else if (func.email === '' || func.email === null || func.email === undefined ){
            
            Alert.alert( "Dado Incorreto", "O campo 'Email' não pode estar em branco",
                [{ text: "OK"}] )

        }else if (func.avatarUrl === '' || func.avatarUrl === null || func.avatarUrl === undefined ){
            
            Alert.alert( "Dado Incorreto", "O campo 'Foto' não pode estar em branco",
                [{ text: "OK"}] )

        }else{
                dispatch({
                    type: func.id ? 'updateFunc' : 'createFunc',
                    payload: func,
                })
                navigation.goBack()}
    }

    return (
        <View style={Styles.form}>
            <Text>Nome</Text>
            <TextInput
                style={Styles.input}
                onChangeText={name => setFunc({...func, name})}
                placeholder="Informe o Nome"
                value={func.name}
            />
            <Text>Email</Text>
            <TextInput
                style={Styles.input}
                onChangeText={email => setFunc({...func, email})}
                placeholder="Informe o E-mail"
                value={func.email}
            />
            <Text style={{marginBottom: 15}}>Deseja receber novidades por email?
            <Switch
                style={{marginHorizontal: 5}}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={func.isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={isEnabled => setFunc({...func, isEnabled})}
                value={func.isEnabled}
             />
            </Text>
            <Text>URL do Avatar</Text>
            <TextInput
                style={Styles.input}
                onChangeText={avatarUrl => setFunc({...func, avatarUrl})}
                placeholder="Informe a URL do Avatar"
                value={func.avatarUrl}
            />
            <Text>Defina o quão bacana é esse funcionário</Text>
            <Slider
                thumbStyle={{ height: 10, width: 10, backgroundColor: '#188dbb'}}
                value={func.Slider}
                onValueChange={Slider => setFunc({...func, Slider})}
            />
            <Button
                style={Styles.button}
                type='outline'
                title="Salvar"
                onPress={() => {confirmData(func)}}
            />
        </View>
    )
}