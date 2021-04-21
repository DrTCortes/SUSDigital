import React, { useState, useContext } from 'react'
import { Text, View, TextInput, StyleSheet, Button } from 'react-native'
import AppContext from '../../context/AppContext'
import Styles from '../../styles'

export default ({route, navigation}) => {
    const [consulta, setConsulta] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(AppContext)

    return (
        <View style={Styles.form}>
            <Text>Nome</Text>
            <TextInput
                style={style.input}
                onChangeText={name => setConsulta({...consulta, name})}
                placeholder="Informe o Nome"
                value={consulta.name}
            />
            <Text>Email</Text>
            <TextInput
                style={style.input}
                onChangeText={email => setConsulta({...consulta, email})}
                placeholder="Informe o E-mail"
                value={consulta.email}
            />
            <Text>URL do Avatar</Text>
            <TextInput
                style={style.input}
                onChangeText={avatarUrl => setConsulta({...consulta, avatarUrl})}
                placeholder="Informe a URL do Avatar"
                value={consulta.avatarUrl}
            />
            <Button
                title="Salvar"
                onPress={() => {
                    dispatch({
                        type: consulta.id ? 'updateConsulta' : 'createConsulta',
                        payload: consulta,
                    })
                    navigation.goBack()
                }}
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