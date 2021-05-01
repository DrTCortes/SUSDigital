import React, { useState, useContext } from 'react'
import { Text, View, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native'
import { ListItem, Button } from 'react-native-elements'
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
            <TouchableOpacity style={[Styles.contentBox, {backgroundColor: '#188dbb'}]}
                onPress={() => getSelection(select)}>
                    <Image style={Styles.imageIcon} source={select.avatarUrl && { uri: select.avatarUrl }}/>
                    <ListItem.Content>
                        <ListItem.Title>{select.name}</ListItem.Title>
                    </ListItem.Content>
            </TouchableOpacity>
        )}

    return (
        <ScrollView>
        <View style={[Styles.container, Styles.horizontalCenter]}>

            <Text style={Styles.text}>Selecione o funcionário: </Text>   
            <FlatList
                keyExtractor={select => select.id.toString()}
                data={state.funcs}
                renderItem={ getSelectItem } />
            
            <Text style={Styles.text}>Selecione o paciente: </Text>
            <FlatList
                keyExtractor={select => select.id.toString()}
                data={state.pacientes}
                renderItem={ getSelectItem } />
            
            <Text style={Styles.text}>Selecione a especialidade: </Text>
            <FlatList
                keyExtractor={select => select.id.toString()}
                data={state.especs}
                renderItem={ getSelectItem } />
            
            <Text style={Styles.text}>Selecione o posto: </Text>
            <FlatList
                keyExtractor={select => select.id.toString()}
                data={state.postos}
                renderItem={ getSelectItem } />
            
            <Text style={Styles.text}>Selecione o medico: </Text>
            <FlatList
                keyExtractor={select => select.id.toString()}
                data={state.medicos}
                renderItem={ getSelectItem } />
            <View style={{width: '90%', margin: 20}}>
            <Button 
                style={Styles.button}  
                type='outline'
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
        </View>
        </ScrollView>
    )
}