import React, { useState, useContext } from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import {Button} from 'react-native-elements'
import AppContext from '../../context/AppContext'
import Styles from '../../styles'

export default ({route, navigation}) => {
    const [func, setFunc] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(AppContext)

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
            <Text>URL do Avatar</Text>
            <TextInput
                style={Styles.input}
                onChangeText={avatarUrl => setFunc({...func, avatarUrl})}
                placeholder="Informe a URL do Avatar"
                value={func.avatarUrl}
            />
            <Button
                style={Styles.button}  
                type='outline'
                title="Salvar"
                onPress={() => {
                    dispatch({
                        type: func.id ? 'updateFunc' : 'createFunc',
                        payload: func,
                    })
                    navigation.goBack()
                }}
            />
        </View>
    )
}