import React, { useState, useContext } from 'react'
import { View, SafeAreaView, Image, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import Styles from '../../styles'
import { Button, Icon } from 'react-native-elements'
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
                    <Image style={Styles.imageIcon} source={select.avatarUrl && { uri: select.avatarUrl }}/>
                    <Text > {select.name} </Text>
            </TouchableOpacity>
        )}

    return (
    <ScrollView>
        <SafeAreaView style={[Styles.container, Styles.infoScreen, Styles.horizontalCenter]}>
            <View style={{width: '100%', backgroundColor: '#E9E9E9'}}>
                    
                <View style={Styles.infoHeader}>
                    <Button type='clear'  onPress={() => navigation.navigate("Funcionarios")}
                                icon={  <Icon name="chevron-left" size={25} color="#188dbb"/> } />
                    <Image style={Styles.ImageInfo} source={func.avatarUrl && { uri: func.avatarUrl }}/>
                    
                    <View style={{alignItems: 'center', flex: 1, paddingVertical: 20, marginVertical: 20}}>
                        <Text style={Styles.infoText2}>{func.type}</Text>
                        <Text style={Styles.infoText}>{func.name}</Text>
                    </View>
                </View>
                
                <View style={[Styles.horizontalCenter, Styles.infoHeader, {marginBottom: 50}]}>
                    <View style={Styles.contentBox2}>

                        <Text style={Styles.infoBox}>Posto em que trabalha:</Text>
                        <Text style={[Styles.infoBox, Styles.infoText]}> {func.posto} </Text>

                        <Text style={Styles.infoBox}>Paciente ao qual presta atendimento:</Text>
                        <Text style={[Styles.infoBox, Styles.infoText]}> {func.paciente} </Text>
                        
                    </View>
                </View>
            </View>

            <View style={[Styles.horizontalCenter]}>
                <View style={Styles.formImageInfo1}/>
                <View style={Styles.formImageInfo2}/>
            </View>
            
            <View style={[Styles.container, Styles.horizontalCenter]}>
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
                
                <TouchableOpacity  onPress={() => {
                        dispatch({
                            type: func.id ? 'updateFunc' : 'createFunc',
                            payload: func,
                        })
                    }}>
                    <Text style={[Styles.button, Styles.horizontalCenter, {padding: 10}]}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    </ScrollView>
    )
}