import React, { useState, useContext } from 'react'
import { Text, View, TextInput, Alert } from 'react-native'
import Context from '../../context/AppContext'
import {Button} from 'react-native-elements'
import Styles from '../../styles'

export default ({route, navigation}) => {
    const [paciente, setPaciente] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(Context)

    function confirmData(paciente, borderRed){
        if (paciente.name === '' || paciente.name === null || paciente.name === undefined ){
            Alert.alert( "Dado Incorreto", "O campo 'Nome' não pode estar em branco",
                [{ text: "OK"}] )

        }else if (paciente.email === '' || paciente.email === null || paciente.email === undefined ){
            
            Alert.alert( "Dado Incorreto", "O campo 'Email' não pode estar em branco",
                [{ text: "OK"}] )

        }else if (paciente.avatarUrl === '' || paciente.avatarUrl === null || paciente.avatarUrl === undefined ){
            
            Alert.alert( "Dado Incorreto", "O campo 'Foto' não pode estar em branco",
                [{ text: "OK"}] )

        }else{
                dispatch({
                    type: paciente.id ? 'updatePaciente' : 'createPaciente',
                    payload: paciente,
                })
                navigation.goBack()}
    }

    return (
        <View style={Styles.form}>
            <Text>Nome</Text>
            <TextInput
                style={Styles.input}
                onChangeText={name => setPaciente({...paciente, name})}
                placeholder="Informe o Nome"
                value={paciente.name}
            />
            <Text>CPF</Text>
            <TextInput
                style={Styles.input}
                onChangeText={CPF => setPaciente({...paciente, CPF})}
                placeholder="Informe seu CPF"
                value={paciente.CPF}
            />
            <Text>CNS</Text>
            <TextInput
                style={Styles.input}
                onChangeText={CNS => setPaciente({...paciente, CNS})}
                placeholder="Informe o Núemro do SUS"
                value={paciente.CNS}
            />
            <Text>Sexo</Text>
            <TextInput
                style={Styles.input}
                onChangeText={Sexo => setPaciente({...paciente, Sexo})}
                placeholder="Informe o Sexo"
                value={paciente.Sexo}
            />
            <Text>Data de Nascimento</Text>
            <TextInput
                style={Styles.input}
                onChangeText={DN => setPaciente({...paciente, DN})}
                placeholder="Informe a Data de Nascimento"
                value={paciente.DN}
            />
            <Text>Nome da Mãe</Text>
            <TextInput
                style={Styles.input}
                onChangeText={Mae => setPaciente({...paciente, Mae})}
                placeholder="Informe o nome da Mãe"
                value={paciente.Mae}
            />
            <Text>Email</Text>
            <TextInput
                style={Styles.input}
                onChangeText={email => setPaciente({...paciente, email})}
                placeholder="Informe o E-mail"
                value={paciente.email}
            />
            <Text>URL do Avatar</Text>
            <TextInput
                style={Styles.input}
                onChangeText={avatarUrl => setPaciente({...paciente, avatarUrl})}
                placeholder="Informe a URL do Avatar"
                value={paciente.avatarUrl}
            />
            
            <Button
                style={Styles.button}  
                type='outline'
                title="Salvar"
                onPress={() => {confirmData(paciente)}}
            />
        </View>
    )
}