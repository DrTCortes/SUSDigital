import React, {useContext} from 'react';
import { View, FlatList, Alert } from 'react-native';

import dataEspec from './data'
import { ListItem, Avatar, Button, Icon} from 'react-native-elements';
  
export default props => {

  
  function confirmEspecDeletion(Espec){
    Alert.alert('Excluir Especialidade?', 'Deseja excluir a Especialidade?',[
      { text: 'Sim'}, { text: 'Não' }
    ])
  }
    
  function getAction(Espec){
    return(
      <>
        <Button
          onPress={() => props.navigation.navigate('FormEspecialidades', Espec)}
          type='clear'
          icon={<Icon name='edit' size={25} color='orange'/>}
        />
        <Button
          onPress={() => confirmEspecDeletion(Espec)}
          type='clear'
          icon={<Icon name='delete' size={25} color='red'/>}
        />
      </>
    )
  }

  function getEspecItem({item: Espec}){
    return(

    <ListItem   key={Espec.id} onPress={()=> props.navigation.navigate("FormEspecialidades", Espec)} bottomDivider>
      <Avatar tittle={Espec.name} rounded source={Espec.avatarUrl && { uri: Espec.avatarUrl }}/>
      <ListItem.Content>
          <ListItem.Title>{Espec.name}</ListItem.Title>
          <ListItem.Subtitle>{Espec.descricao}</ListItem.Subtitle>
        </ListItem.Content>
          <View style={{flexDirection:'row'}}>{getAction(Espec)}</View>
    </ListItem>
)}

return(
  <View>
     <FlatList
      keyExtractor={Espec => Espec.id.toString()}
      data={dataEspec}
      renderItem={getEspecItem}
      />
    </View>
  )}
