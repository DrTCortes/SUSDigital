  import React, {useContext} from 'react';
  import { View, FlatList, Alert } from 'react-native';
  
  import dataFunc from './data'
  import { ListItem, Avatar, Button, Icon} from 'react-native-elements';
    
  export default props => {
  
    
    function confirmPostosDeletion(postos){
      Alert.alert('Excluir Posto?', 'Deseja excluir o Posto?',[
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
      
    function getAction(func){
      return(
        <>
          <Button
            onPress={() => props.navigation.navigate('FormPostos', func)}
            type='edit'
            icon={<Icon name='edit' size={25} color='orange'/>}
          />
          <Button
            onPress={() => confirmPostosDeletion(func)}
            type='delete'
            icon={<Icon name='delete' size={25} color='red'/>}
          />
        </>
      )
    }
  
    function getFuncItem({item: posto}){
      return(
        <ListItem key={posto.id} bottomDivider>
          <Avatar tittle={posto.name} rounded source={posto.avatarUrl && { uri: posto.avatarUrl }}/>
          <ListItem.Content>
            <ListItem.Title>{posto.name}</ListItem.Title>
            <ListItem.Subtitle>{posto.endereco}</ListItem.Subtitle>
            <ListItem.Subtitle>{posto.especialidade}</ListItem.Subtitle>
          </ListItem.Content>
          <View style={{flexDirection:'row'}}>{getAction(posto)}</View>
        </ListItem>
  )}
  
  return(
    <View>
       <FlatList
        keyExtractor={posto => posto.id.toString()}
        data={dataFunc}
        renderItem={getFuncItem}
        />
      </View>
    )}
  