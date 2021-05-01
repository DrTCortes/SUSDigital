import React, { useState, useContext } from 'react'
import { View, Image, Text, FlatList, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native'
import { Button, Icon } from 'react-native-elements'
import Styles from '../../styles'
import AppContext from '../../context/AppContext'

export default ({route, navigation}) => {
    const [espec, setEspec] = useState(route.params ? route.params : {})
    const { state, dispatch } = useContext(AppContext)
    
    function getSelection(select) {
        if (select.type === "medico"){
            espec.medico = select.name            
        }else if(select.type === "posto"){
                espec.posto = select.name            
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
                        <Button type='clear'  onPress={() => navigation.navigate("Especialidades")}
                                    icon={  <Icon name="chevron-left" size={25} color="#188dbb"/> } />
                        <Image style={Styles.ImageInfo} source={espec.avatarUrl && { uri: espec.avatarUrl }}/>
                        
                        <View style={{alignItems: 'center', flex: 1, paddingVertical: 20, marginVertical: 20}}>
                            <Text style={Styles.infoText2}>{espec.type}</Text>
                            <Text style={Styles.infoText}>{espec.name}</Text>
                        </View>
                    </View>

                    <View style={[Styles.horizontalCenter, Styles.infoHeader, {marginBottom: 50}]}>
                        <View style={Styles.contentBox2}>

                            <Text style={Styles.infoBox}>Posto em que se tem esta especialidade:</Text>
                            <Text style={[Styles.infoBox, Styles.infoText]}> {espec.posto} </Text>

                            <Text style={Styles.infoBox}>Médico que atende a especialidade:</Text>
                            <Text style={[Styles.infoBox, Styles.infoText]}> {espec.medico} </Text>
                            
                        </View>
                    </View>
                </View>

                <View style={[Styles.horizontalCenter, ]}>
                    <View style={Styles.formImageInfo1}/>
                    <View style={Styles.formImageInfo2}/>
                </View>
                
                <View>
                    <Text style={[Styles.text, {color: "#e1e1e1", fontSize: 18}]}>Selecione o posto: </Text>
                    <FlatList
                        keyExtractor={select => select.id.toString()}
                        data={state.postos}
                        renderItem={ getSelectItem } />

                    <Text style={[Styles.text, {color: "#e1e1e1", fontSize: 18}]}>Selecione o médico: </Text>
                    <FlatList
                        keyExtractor={select => select.id.toString()}
                        data={state.medicos}
                        renderItem={ getSelectItem } />
                        
                    <Button
                        style={Styles.button}  
                        type='outline'
                        title="Salvar"
                        onPress={() => {
                            dispatch({
                                type: espec.id ? 'updateEspec' : 'createEspec',
                                payload: espec,
                            })
                            // navigation.goBack()
                        }}
                    />
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}