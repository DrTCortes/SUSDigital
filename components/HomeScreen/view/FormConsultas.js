import React, { useState, useContext } from 'react'
import { Text, View, TextInput, StyleSheet, Button, FlatList } from 'react-native'
import { ListItem, Icon, Avatar } from 'react-native-elements'
import AppContext from '../../context/AppContext'
import Styles from '../../styles'

export default ({route, navigation}) => {
    const [consulta, setConsulta] = useState(route.params ? route.params : {})
    const { state, dispatch } = useContext(AppContext)

    function getSelection(select) {
        if (select.type === "funcionario"){
            consulta.c_func = select.name
        
        }else if(select.type === "paciente"){
                consulta.c_paciente = select.name
                consulta.c_avatarUrl = select.avatarUrl
        
        }else if(select.type === "especialidade"){
                consulta.c_especialidade = select.name
        
        }else if(select.type === "posto"){
            consulta.c_posto = select.name
        
        }else if(select.type === "medico"){
            consulta.c_medico = select.name
        }

        return        
    }

    function getSelectItem({ item: select }) {
        return (
            <ListItem key={select.id} bottomDivider
                onPress={() => getSelection(select)}>
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