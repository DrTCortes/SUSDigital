import React from 'react'
import { View, Text, FlatList, Alert } from 'react-native'
import { Avatar, Button, Icon, ListItem } from 'react-native-elements'
import medicos from './data'

export default props => {

    function confirUserDeletion(medicos) {
        Alert.alert('Excluir Medico', 'Deseja excluir o Medico?',[
          { 
            text: 'Sim',
            onPress() {
                       console.warn('delete ' + medicos.id)	
            }
          },
              {
            text: 'Não'
          }    
        ])    
    }

    function getActions(medicos){
        return(
            <>
                <Button
                    onPress={() => props.navigation.navigate('FormMedico',medicos)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                />
                <Button
                    onPress={() => confirmUserDeletion(medicos)}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />
            </>
        )
    }

    function getUserItem({ item : medicos }){
        return(           
            <ListItem key={medicos.id} bottomDivider>
                <Avatar                              
                tittle={medicos.name}                
                source={{ uri: medicos.avatarUrl }}                
                Subtitle={medicos.email}                             
                onPress={() => props.navigation.navigate('UserForm',medicos)}                 
                rounded                
                />                                
                <ListItem.Content>                    
                    <ListItem.Title>{medicos.name}</ListItem.Title>                    
                    <ListItem.Subtitle>{medicos.email}</ListItem.Subtitle>                                                                      
                </ListItem.Content>
                <Button
                    onPress={() => {
                        props.navigation.navigate('UserForm', medicos);
                    }}
                    type="clear"
                    icon={<Icon name="edit" size={15} color="orange" />}
                />
                <Button 
                    onPress={() => {confirmUserDeletion(medicos)}}
                    type="clear"
                    icon={<Icon name="delete" size={15} color="red"/>}
                />                                                                       
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList
            keyExtractor={medicos => medicos.id.toString()}
            data={medicos}
            renderItem={getUserItem}
            />
        </View>
    )

}