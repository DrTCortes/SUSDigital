import React, { useState, useContext } from 'react'
import { Text, View, TextInput, StyleSheet} from 'react-native'
import axios from 'axios'
import Styles from '../../styles'
import Context from '../../context/AppContext'
import {Button} from 'react-native-elements'

export default ({route, navigation}) => {
    const [posto, setPosto] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(Context)

    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [endereco, setEndereco] = useState('');

    const api = axios.create({
        baseURL: 'https://viacep.com.br/ws/'
    });

    async function getEndereco(cep) {
        const { data } = await api.get(`${cep}/json/`)
        setCidade(data.localidade);
        setEstado(data.uf);
        setEndereco(data.logradouro)
    }
    return (
        <View style={Styles.form}>
            <Text>Unidade de saude:</Text>
            <TextInput
                style={Styles.input}
                onChangeText={name => setPosto({...posto, name})}
                placeholder="Informe a unidade de saúde"
                value={posto.name}
            />
                 <Text>Especialidade da unidade:</Text>
            <TextInput
                style={Styles.input}
                onChangeText={especialidadeposto => setPosto({...posto, especialidadeposto})}
                placeholder="Informe a Especialidade"
                value={posto.especialidadeposto}
            />
             <Text>CEP:</Text>
            <TextInput
                style={Styles.input}
                onBlur={e => getEndereco(e.target.value)}
                onChangeText={cep => setPosto({...posto, cep})}
                placeholder="Informe o CEP"
                value={posto.cep}
                
            />
            <Text>Endereço:</Text>
            <TextInput
                style={Styles.input}
                onChangeText={endereco => setPosto({...posto, endereco})}
                placeholder="Informe o Endereço"
                value={endereco}
            />
            <Text>Estado:</Text>
            <TextInput
                style={Styles.input}
                onChangeText={estado => setPosto({...posto, estado})}
                placeholder="Informe o Estado"
                value={estado}
            />
            <Text>Cidade:</Text>
            <TextInput
                style={Styles.input}
                onChangeText={cidade => setPosto({...posto, cidade})}
                placeholder="Informe a Cidade"
                value={cidade}
            />
             
              <Text>URL do Avatar</Text>
            <TextInput
                onChangeText={avatarUrl => setPosto({...posto, avatarUrl})}
                placeholder="Informe a URL do Avatar"
                value={posto.avatarUrl}
                style={Styles.input} 
            />

          
            <Button
             style={Styles.button}  
                type='outline'
                title="Salvar"
                onPress={() => {
                    dispatch({
                        type: posto.id ? 'updatePosto' : 'createPosto',
                        payload: {...posto, endereco, estado, cidade},
                    })
                    navigation.goBack()
                }}
            />
        </View>
    )
}