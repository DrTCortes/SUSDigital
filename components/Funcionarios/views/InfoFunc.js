import React, { useState, useContext } from 'react'
import { View, Image, Text, FlatList, TouchableOpacity } from 'react-native'
import { Button, Icon } from 'react-native-elements'
import Styles from '../../styles'
import AppContext from '../../context/AppContext'

export default ({route, navigation}) => {
    const [func, setFunc] = useState(route.params ? route.params : {})
    const { state, dispatch } = useContext(AppContext)
    
    function getSelection(select) {
        if (select.type === "paciente"){
            func.paciente = select.name            
        }else if(select.type === "posto"){
                func.posto = select.name            
        }    
        return
    }

    function getSelectItem({ item: select }) {
        return (
            <TouchableOpacity style={[Styles.contentBox, {backgroundColor: '#e1e1e1'}]}
                onPress={() => getSelection(select)}>
                    <Image style={Styles.imageIcon} tittle={select.name} rounded source={select.avatarUrl && { uri: select.avatarUrl }}/>
                    <Text > {select.name} </Text>
            </TouchableOpacity>
        )}


    return (
        <View style={[Styles.container, Styles.infoScreen]}>
            <View style={Styles.infoHeader}>

                <Button type='clear'  onPress={() => navigation.navigate("Funcionarios")}
                            icon={  <Icon name="chevron-left" size={25} color="#188dbb"/> } />
                <Image style={Styles.ImageInfo} source={func.avatarUrl && { uri: func.avatarUrl }}/>
                
                <View style={{alignItems: 'center', flex: 1, paddingVertical: 20, marginVertical: 20}}>
                    <Text style={Styles.infoText2}>{func.type}</Text>
                    <Text style={Styles.infoText}>{func.name}</Text>
                </View>
            </View>

            <View style={Styles.formImageInfo1}/>
            <View style={Styles.formImageInfo2}/>

            <Text style={[Styles.text, {color: "#e1e1e1", fontSize: 18}]}>Selecione o posto: </Text>
            <FlatList
                keyExtractor={select => select.id.toString()}
                data={state.postos}
                renderItem={ getSelectItem } />

            <Text style={[Styles.text, {color: "#e1e1e1", fontSize: 18}]}>Selecione o Paciente: </Text>
            <FlatList
                keyExtractor={select => select.id.toString()}
                data={state.pacientes}
                renderItem={ getSelectItem } />
                
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