import React, { useState, useContext } from 'react'
import { Text, View, TextInput, StyleSheet, Alert, Switch, CheckBox} from 'react-native'
import {Button, Slider} from 'react-native-elements'
import AppContext from '../../context/AppContext'
import Styles from '../../styles'


export default ({route, navigation}) => {
    const [espec, setEspec] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(AppContext)

    function confirmData(espec, borderRed){
        if (espec.name === '' || espec.name === null || espec.name === undefined ){
            Alert.alert( "Dado Incorreto", "O campo 'Nome' não pode estar em branco",
                [{ text: "OK", onPress: () => console.log("OK Pressed") }] )
                // {console.log("Adicione Nome ")}

        }else if (espec.descricao === '' || espec.descricao === null || espec.descricao === undefined ){
            
            Alert.alert( "Dado Incorreto", "O campo 'Descrição' não pode estar em branco",
                [{ text: "OK", onPress: () => console.log("OK Pressed") }] )
            // {console.log("Adicione Email")}

        }else if (espec.avatarUrl === '' || espec.avatarUrl === null || espec.avatarUrl === undefined ){
            
            Alert.alert( "Dado Incorreto", "O campo 'Foto' não pode estar em branco",
                [{ text: "OK", onPress: () => console.log("OK Pressed") }] )
            // {console.log("Adicione Foto")}

        }else if (espec.posto === '' || espec.posto === null || espec.posto === undefined ){
            
            Alert.alert( "Dado Incorreto", "O campo 'Posto' não pode estar em branco",
                [{ text: "OK", onPress: () => console.log("OK Pressed") }] )
            // {console.log("Adicione Posto")}

        }else if (espec.medico === '' || espec.medico === null || espec.medico === undefined ){
            
            Alert.alert( "Dado Incorreto", "O campo 'Médico' não pode estar em branco",
                [{ text: "OK", onPress: () => console.log("OK Pressed") }] )
            // {console.log("Adicione Medico")}

        }else{
                dispatch({
                    type: espec.id ? 'updateEspec' : 'createEspec',
                    payload: espec,
                })
                navigation.goBack()}
    }

    return (
        <View style={style.form}>
            <Text>Name</Text>
            <TextInput 
                onChangeText={name => setEspec({...espec, name})}
                placeholder="Informe o nome"
                value={espec.name}
                style={Styles.input}
            />
            <Text>Descrição</Text>
            <TextInput 
                onChangeText={descricao => setEspec({...espec, descricao})}
                placeholder="Informe a descrição da especialidade"
                value={espec.descricao}
                style={Styles.input}
            />
            <Text>Url da Especialidade</Text>
            <TextInput 
                onChangeText={avatarUrl => setEspec({...espec, avatarUrl})}
                placeholder="Informe a Url da especialidade"
                value={espec.avatarUrl}
                style={Styles.input}
            />
            <Text>Postos Disponíveis</Text>
            <TextInput 
                onChangeText={posto => setEspec({...espec, posto})}
                placeholder="Informe o nome"
                value={espec.posto}
                style={Styles.input}
            />
            <Text>Medicos Disponíveis</Text>
            <TextInput 
                onChangeText={medico => setEspec({...espec, medico})}
                placeholder="Informe o nome"
                value={espec.medico}
                style={Styles.input}
            />
            <Text style={{marginBottom: 30}}>Esta especialidade tem uma demanda alta?
            <Switch
                style={{marginHorizontal: 20}}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={espec.isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={isEnabled => setEspec({...espec, isEnabled})}
                value={espec.isEnabled}
             />
            </Text>
            <Text>De 0% a 100% qual a importancia dessa especialidade?</Text>
            <Slider
                thumbStyle={{ height: 12, width: 12, backgroundColor: '#188dbb'}}
                value={espec.Slider}
                onValueChange={Slider => setEspec({...espec, Slider})}
            />
            <Button
                style={Styles.button}  
                type='outline'
                title="Salvar"
                onPress={() => {confirmData(espec)}}
            />
        </View>
    )
}

const style = StyleSheet.create({
    form: {
        padding: 12
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
    }
})