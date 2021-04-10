import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import dataFunc from './data'
import Espec from '../Especialidades'
import { ListItem, Avatar} from 'react-native-elements';


export default props => {

  function getFuncItem({item: func}){
  return(
    <ListItem  key={func.id} >
    <Avatar tittle={func.name} rounded source={{uri: func.avatarUrl}}/>
    <ListItem.Content>
          <ListItem.Title>{func.name}</ListItem.Title>
          <ListItem.Subtitle>{func.subtitle}</ListItem.Subtitle>
        </ListItem.Content>

    </ListItem>
  )
}

  return(
    <View>
     <FlatList
      keyExtractor={func => func.id.toString()}
      data={dataFunc}
      renderItem={getFuncItem}
     />

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  
  