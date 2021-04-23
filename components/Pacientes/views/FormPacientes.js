import React, { useState, useContext } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import Context from '../../context/AppContext'
import {Button} from 'react-native-elements'
import Styles from '../../styles'

export default ({route, navigation}) => {
    const [paciente, setPaciente] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(Context)

    return (
        <View style={Styles.form}>
            <Text>Nome</Text>
            <TextInput
                style={Styles.input}
                onChangeText={name => setPaciente({...paciente, name})}
                placeholder="Informe o Nome"
                value={paciente.name}
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
                onPress={() => {
                    dispatch({
                        type: paciente.id ? 'updatePaciente' : 'createPaciente',
                        payload: paciente,
                    })
                    navigation.goBack()
                }}
            />
        </View>
    )
}