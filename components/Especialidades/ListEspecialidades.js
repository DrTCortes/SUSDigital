import React, {useContext} from 'react';
import { View, FlatList, Alert } from 'react-native';

import dataFunc from './data'
import { ListItem, Avatar, Button, Icon} from 'react-native-elements';

  
export default props => {

  
  function confirmFuncDeletion(func){
    Alert.alert('Excluir funcionário?', 'Deseja excluir o funcionário?',[
      { text: 'Sim'}, { text: 'Não' }
    ])
  }
    
  function getAction(func){
    return(
      <>
        <Button
          onPress={() => props.navigation.navigate('FormFunc', func)}
          type='clear'
          icon={<Icon name='edit' size={25} color='orange'/>}
        />
        <Button
          onPress={() => confirmFuncDeletion(func)}
          type='clear'
          icon={<Icon name='delete' size={25} color='red'/>}
        />
      </>
    )
  }

  function getFuncItem({item: func}){
    return(

    <ListItem   key={func.id} onPress={()=> props.navigation.navigate("FormFunc", func)} bottomDivider>
      <Avatar tittle={func.name} rounded source={func.avatarUrl && { uri: func.avatarUrl }}/>
      <ListItem.Content>
          <ListItem.Title>{func.name}</ListItem.Title>
          <ListItem.Subtitle>{func.email}</ListItem.Subtitle>
        </ListItem.Content>
          <View style={{flexDirection:'row'}}>{getAction(func)}</View>
    </ListItem>
)}

return(
  <View>
     <FlatList
      keyExtractor={func => func.id.toString()}
      data={dataFunc}
      renderItem={getFuncItem}
      />
    </View>
  )}
