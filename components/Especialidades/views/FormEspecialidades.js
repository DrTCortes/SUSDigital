import React, { useState, useContext } from 'react'
import { Text, View, TextInput, StyleSheet, Button } from 'react-native'
import Styles from '../../styles'
import AppContext from '../../context/AppContext'

export default ({route, navigation}) => {
    const [espec, setEspec] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(AppContext)

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
            <Text>Url do Avatar</Text>
            <TextInput 
                onChangeText={avatarUrl => setEspec({...espec, avatarUrl})}
                placeholder="Informe a Url do avatar"
                value={espec.avatarUrl}
                style={Styles.input}
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