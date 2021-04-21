import React, { useState, useContext } from 'react'
import { Text, View, TextInput, StyleSheet, Button, FlatList } from 'react-native'
import { ListItem, Icon, Avatar } from 'react-native-elements'
import AppContext from '../../context/AppContext'
import Styles from '../../styles'

export default ({route, navigation}) => {
    const [consulta, setConsulta] = useState(route.params ? route.params : {})
    const { state, dispatch } = useContext(AppContext)

    function getSelection(select) {
        return (
            <>
            
            </>
        )
    }

    function getSelectItem({ item: select }) {
        return (
            <ListItem key={select.id} bottomDivider
                onPress={() => name => setConsulta({...consulta, name})}>
                    <Avatar tittle={select.id} rounded source={select.avatarUrl && { uri: select.avatarUrl }}/>
                    <ListItem.Content>
                        <ListItem.Title>{select.name}</ListItem.Title>
                    </ListItem.Content>
            </ListItem>
        )}

    return (
        <View style={Styles.form}>

            <Text>Selecione o funcionário: </Text>   
            <FlatList
                keyExtractor={select => select.id.toString()}
                data={state.funcs}
                renderItem={ getSelectItem } />
            
            <Text>Selecione o paciente: </Text>
            <FlatList
                keyExtractor={select => select.id.toString()}
                data={state.pacientes}
                renderItem={ getSelectItem } />
            
            <Text>Selecione a especialidade: </Text>
            <FlatList
                keyExtractor={select => select.id.toString()}
                data={state.especs}
                renderItem={ getSelectItem } />
            
            <Text>Selecione o posto: </Text>
            <FlatList
                keyExtractor={select => select.id.toString()}
                data={state.postos}
                renderItem={ getSelectItem } />
            
            <Text>Selecione o medico: </Text>
            <FlatList
                keyExtractor={select => select.id.toString()}
                data={state.medicos}
                renderItem={ getSelectItem } />
            
            <Button
                title="Salvar"
                onPress={() => {
                    dispatch({
                        type: consulta.c_id ? 'updateConsulta' : 'createConsulta',
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
{/* <Text>Funcionário</Text>
<TextInput
    style={style.input}
    onChangeText={c_func => setConsulta({...consulta, c_func})}
    placeholder="Informe o Funcionário"
    value={consulta.c_func}
/>
<Text>Paciente</Text>
<TextInput
    style={style.input}
    onChangeText={c_paciente => setConsulta({...consulta, c_paciente})}
    placeholder="Informe o Paciente"
    value={consulta.c_paciente}
/>
<Text>Especialidade</Text>
<TextInput
    style={style.input}
    onChangeText={c_especialidade => setConsulta({...consulta, c_especialidade})}
    placeholder="Informe a Especialidade"
    value={consulta.c_especialidade}
/>
<Text>Posto</Text>
<TextInput
    style={style.input}
    onChangeText={c_posto => setConsulta({...consulta, c_posto})}
    placeholder="Informe a Especialidade"
    value={consulta.c_posto}
/>
<Text>Médico</Text>
<TextInput
    style={style.input}
    onChangeText={c_medico => setConsulta({...consulta, c_medico})}
    placeholder="Informe a Especialidade"
    value={consulta.c_medico}
/> */}