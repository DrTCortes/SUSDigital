import React, { useState, useContext } from 'react'
import { Text, View, TextInput, CheckBox, Alert } from 'react-native'
import axios from 'axios'
import Styles from '../../styles'
import Context from '../../context/AppContext'
import {Button} from 'react-native-elements'

export default ({route, navigation}) => {
    const [posto, setPosto] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(Context)

    let createPosto = true;

    if(posto.id) {
        createPosto = false
    }

    const [cidade, setCidade] = useState(posto.cidade);
    const [estado, setEstado] = useState(posto.estado);
    const [endereco, setEndereco] = useState(posto.endereco);

    const [disabledCidade, setDisabledCidade] = useState(true);
    const [disabledEstado, setDisabledEstado] = useState(true);
    const [disabledEndereco, setDisabledEndereco] = useState(true);

    const [inputIsErrUnidadeSaude, setInputIsErrUnidadeSaude] = useState(false);
    const [inputIsErrEspecialidade, setInputIsErrEspecialidade] = useState(false);
    const [inputIsErrCep, setInputIsErrCep] = useState(false);
    const [inputIsErrEndereco, setInputIsErrEndereco] = useState(false);
    const [inputIsErrEstado, setInputIsErrEstado] = useState(false);
    const [inputIsErrCidade, setInputIsErrCidade] = useState(false);
    const [inputIsErrAvatarURL, setInputIsErrAvatarURL] = useState(false);

    const [isSelected, setSelection] = useState(false);

    const api = axios.create({
        baseURL: 'https://viacep.com.br/ws/'
    });

    async function getEndereco(cep) {
        try {
            const { data } = await api.get(`${cep}/json/`)
            setCidade(data.localidade);
            setEstado(data.uf);
            setEndereco(data.logradouro);
            setDisabledCidade(false);
            setDisabledEstado(false);
            setDisabledEndereco(false);
        } catch (error) {
            
        }
    }

    function confirmData(posto){
        setInputIsErrUnidadeSaude(false);
        setInputIsErrEspecialidade(false);
        setInputIsErrCep(false);
        setInputIsErrEndereco(false);
        setInputIsErrEstado(false);
        setInputIsErrCidade(false);
        setInputIsErrAvatarURL(false);
        if (posto.name === '' || posto.name === null || posto.name === undefined ){
            Alert.alert( "Dado Incorreto", "O campo 'Unidade de saude' não pode estar em branco",
                [{ text: "OK"}] );
            setInputIsErrUnidadeSaude(true);
        }else if (posto.especialidadeposto === '' || posto.especialidadeposto === null || posto.especialidadeposto === undefined ){
            Alert.alert( "Dado Incorreto", "Especialidade da unidade' não pode estar em branco",
                [{ text: "OK"}] );
                setInputIsErrEspecialidade(true);
        }else if (posto.cep === '' || posto.cep === null || posto.cep === undefined ){
            Alert.alert( "Dado Incorreto", "O campo 'CEP' não pode estar em branco",
                [{ text: "OK"}] );
                setInputIsErrCep(true);
        }else if (posto.endereco === '' || posto.endereco === null || posto.endereco === undefined ){
            Alert.alert( "Dado Incorreto", "O campo 'Endereço' não pode estar em branco",
                [{ text: "OK"}] );
                setInputIsErrEndereco(true);
        }else if (posto.estado === '' || posto.estado === null || posto.estado === undefined ){
            Alert.alert( "Dado Incorreto", "O campo 'Estado' não pode estar em branco",
                [{ text: "OK"}] );
                setInputIsErrEstado(true);
        }else if (posto.cidade === '' || posto.cidade === null || posto.cidade === undefined ){
            Alert.alert( "Dado Incorreto", "O campo 'Cidade' não pode estar em branco",
                [{ text: "OK"}] );
                setInputIsErrCidade(true);
        }else if (posto.avatarUrl === '' || posto.avatarUrl === null || posto.avatarUrl === undefined ){
            Alert.alert( "Dado Incorreto", "O campo 'Foto' não pode estar em branco",
                [{ text: "OK"}] );
                setInputIsErrAvatarURL(true);
        }else{
            dispatch({
                type: posto.id ? 'updatePosto' : 'createPosto',
                payload: posto,
            })
            navigation.goBack()}
    }

    return (
        <View style={Styles.form}>
            <Text>Unidade de saude:</Text>
            <TextInput
                style={!inputIsErrUnidadeSaude ? Styles.input: Styles.inputErr}
                onChangeText={name => setPosto({...posto, name})}
                placeholder="Informe a unidade de saúde"
                value={posto.name}
            />
            <Text>Especialidade da unidade:</Text>
            <TextInput
                style={!inputIsErrEspecialidade ? Styles.input: Styles.inputErr}
                onChangeText={especialidadeposto => setPosto({...posto, especialidadeposto})}
                placeholder="Informe a Especialidade"
                value={posto.especialidadeposto}
            />
             <Text>CEP:</Text>
            <TextInput
                style={!inputIsErrCep ? Styles.input: Styles.inputErr}
                onBlur={e => getEndereco(e.target.value)}
                onChangeText={cep => setPosto({...posto, cep})}
                placeholder="Informe o CEP"
                value={posto.cep}
                
            />
            <Text>Endereço:</Text>
            <TextInput
                style={!inputIsErrEndereco ? Styles.input: Styles.inputErr}
                onChangeText={endereco => setPosto({...posto, endereco})}
                placeholder="Informe o Endereço"
                value={endereco}
                editable={disabledEndereco}
            />
            <Text>Estado:</Text>
            <TextInput
                style={!inputIsErrEstado ? Styles.input: Styles.inputErr}
                onChangeText={estado => setPosto({...posto, estado})}
                placeholder="Informe o Estado"
                value={estado}
                editable={disabledEstado}
            />
            <Text>Cidade:</Text>
            <TextInput
                style={!inputIsErrCidade ? Styles.input: Styles.inputErr}
                onChangeText={cidade => setPosto({...posto, cidade})}
                placeholder="Informe a Cidade"
                value={cidade}
                editable={disabledCidade}
            />
             
              <Text>URL do Avatar</Text>
            <TextInput
                onChangeText={avatarUrl => setPosto({...posto, avatarUrl})}
                placeholder="Informe a URL do Avatar"
                value={posto.avatarUrl}
                style={!inputIsErrAvatarURL ? Styles.input: Styles.inputErr} 
            />

            <View  
                style={
                    createPosto
                    ? {
                        flexDirection:'row',
                        alignItems: 'center'
                    }
                    : {
                        display: 'none'
                    }
                }
            >
                <CheckBox value={isSelected} onValueChange={setSelection} />
                <Text> Eu li e concordo com os termos de serviço</Text>
            </View>
          
            <Button
            disabled={!isSelected && createPosto}
             style={Styles.button}  
                type='outline'
                title="Salvar"
                onPress={() =>  confirmData({...posto, endereco, estado, cidade})}
            />
        </View>
    )
}
