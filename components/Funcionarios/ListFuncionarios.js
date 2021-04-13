import * as React from 'react';
import { View, TextInput, Button, SafeAreaView, StatusBar, FlatList } from 'react-native';

import styles from '../styles'
import dataFunc from './data'
import { ListItem, Avatar} from 'react-native-elements';
  
export default props => {
    
  function getFuncItem({item: func}){
    return(

    <ListItem  key={func.id} onPress={()=> props.navigation.navigate("Home")} bottomDivider>
      <Avatar tittle={func.name} rounded source={func.avatarUrl && { uri: func.avatarUrl }}/>
      <ListItem.Content>
          <ListItem.Title>{func.name}</ListItem.Title>
          <ListItem.Subtitle>{func.email}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
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