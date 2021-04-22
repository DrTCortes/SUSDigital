import React, { useState, useContext } from 'react'
import { Text, View, TextInput, StyleSheet, Button } from 'react-native'
import Styles from '../../styles'
import Context from '../../context/AppContext'

export default ({route, navigation}) => {
    const [posto, setPosto] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(Context)

    return (
        <View style={Styles.form}>
            <Text>Unidade de saude:</Text>
            <TextInput
                style={Styles.input}
                onChangeText={name => setPosto({...posto, name})}
                placeholder="Informe a unidade de saúde"
                value={posto.name}
            />
            <Text>Endereço:</Text>
            <TextInput
                style={Styles.input}
                onChangeText={endereco => setPosto({...posto, endereco})}
                placeholder="Informe o Endereço"
                value={posto.endereco}
            />
            <Text>Estado:</Text>
            <TextInput
                style={Styles.input}
                onChangeText={estado => setPosto({...posto, estado})}
                placeholder="Informe o Estado"
                value={posto.estado}
            />
            <Text>Cidade:</Text>
            <TextInput
                style={Styles.input}
                onChangeText={cidade => setPosto({...posto, cidade})}
                placeholder="Informe a Cidade"
                value={posto.cidade}
            />
              <Text>CEP:</Text>
            <TextInput
                style={Styles.input}
                onChangeText={cep => setPosto({...posto, cep})}
                placeholder="Informe o CEP"
                value={posto.cep}
            />
            <Button
                style={Styles.button}  type='outline'
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