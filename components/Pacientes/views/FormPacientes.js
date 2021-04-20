import React, { useState, useContext } from 'react'
import { Text, View, TextInput, StyleSheet, Button } from 'react-native'
import Context from '../../context/AppContext'

export default ({route, navigation}) => {
    const [paciente, setPaciente] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(Context)

    return (
        <View style={style.form}>
            <Text>Nome</Text>
            <TextInput
                style={style.input}
                onChangeText={name => setPaciente({...paciente, name})}
                placeholder="Informe o Nome"
                value={paciente.name}
            />
            
            <Text>Email</Text>
            <TextInput
                style={style.input}
                onChangeText={email => setPaciente({...paciente, email})}
                placeholder="Informe o E-mail"
                value={paciente.email}
            />
            <Text>URL do Avatar</Text>
            <TextInput
                style={style.input}
                onChangeText={avatarUrl => setPaciente({...paciente, avatarUrl})}
                placeholder="Informe a URL do Avatar"
                value={paciente.avatarUrl}
            />
            <Button
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
//testando
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