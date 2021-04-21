import React, { useState, useContext } from 'react'
import { Text, View, TextInput, StyleSheet, Button } from 'react-native'
import Context from '../../context/AppContext'

export default ({route, navigation}) => {
    const [posto, setPosto] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(Context)

    return (
        <View style={style.form}>
            <Text>Nome</Text>
            <TextInput
                style={style.input}
                onChangeText={name => setPosto({...posto, name})}
                placeholder="Informe o Nome do Posto"
                value={posto.name}
            />
            <Text>Endereço</Text>
            <TextInput
                style={style.input}
                onChangeText={endereco => setPosto({...posto, endereco})}
                placeholder="Informe o Endereço"
                value={posto.endereco}
            />
            <Text>Estado</Text>
            <TextInput
                style={style.input}
                onChangeText={estado => setPosto({...posto, estado})}
                placeholder="Informe o Estado"
                value={posto.estado}
            />
            <Text>Cidade</Text>
            <TextInput
                style={style.input}
                onChangeText={cidade => setPosto({...posto, cidade})}
                placeholder="Informe a Cidade"
                value={posto.cidade}
            />
            <Button
                title="Salvar"
                onPress={() => {
                    dispatch({
                        type: posto.id ? 'updatePosto' : 'createPosto',
                        payload: posto,
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