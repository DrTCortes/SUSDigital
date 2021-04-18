import React, { useContext } from 'react';
import { View, FlatList, Alert } from 'react-native';
import { ListItem, Avatar, Button, Icon} from 'react-native-elements';
import PostosContext from '../context/PostosContext';
    
export default props => {
  const { state, dispatch } = useContext(PostosContext)
  
  function getAction(posto){
    return(
      <>
        <Button
          onPress={() => props.navigation.navigate('FormPostos', posto)}
          type='clear'
          icon={<Icon name='edit' size={25} color='orange'/>}
        />
        <Button
          onPress={() => dispatch({type: 'deletePosto', payload: posto})}
          type='clear'
          icon={<Icon name='delete' size={25} color='red'/>}
        />
      </>
    )
  }  

  function getPostoItem({item: posto}){
    return(
      <ListItem 
        key={posto.id} 
        bottomDivider
        rightElement={getAction(posto)}
      >
        <Avatar tittle={posto.name} rounded source={posto.avatarUrl && { uri: posto.avatarUrl }}/>
        <ListItem.Content>
          <ListItem.Title>{posto.name}</ListItem.Title>
          <ListItem.Subtitle>{posto.endereco}</ListItem.Subtitle>
          <ListItem.Subtitle>{posto.especialidade}</ListItem.Subtitle>
        </ListItem.Content>
        <View style={{flexDirection:'row'}}>{getAction(posto)}</View>
      </ListItem>
    )
  }
  
  return(
    <View>
      <FlatList
        keyExtractor={posto => posto.id.toString()}
        data={state.postos}
        renderItem={getPostoItem}
      />
    </View>
  )
}
  