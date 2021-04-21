import React, { useState, useContext } from 'react'
import { Text, View, TextInput, StyleSheet, Button } from 'react-native'
import AppContext from '../../context/AppContext'

export default ({route, navigation}) => {
    const [espec, setEspec] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(AppContext)

    return (
        <View style={style.form}>
            <Text>Nome</Text>
            <TextInput
                style={style.input}
                onChangeText={name => setEspec({...espec, name})}
                placeholder="Informe o Nome"
                value={espec.name}
            />
            <Text>Email</Text>
            <TextInput
                style={style.input}
                onChangeText={email => setEspec({...espec, email})}
                placeholder="Informe o E-mail"
                value={espec.email}
            />
            <Text>URL do Avatar</Text>
            <TextInput
                style={style.input}
                onChangeText={avatarUrl => setEspec({...espec, avatarUrl})}
                placeholder="Informe a URL do Avatar"
                value={espec.avatarUrl}
            />
            <Button
                title="Salvar"
                onPress={() => {
                    dispatch({
                        type: espec.id ? 'updateEspec' : 'createEspec',
                        payload: espec,
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