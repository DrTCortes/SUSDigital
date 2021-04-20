import React, {useContext} from 'react';
import { View, TextInput, SafeAreaView, StatusBar, FlatList, Alert } from 'react-native';
import { ListItem, Button, Icon, Avatar } from 'react-native-elements'
import Styles from '../styles';
import Context from '../context/AppContext'



export default props => {
  
  const { state, dispatch } = useContext(Context)

  function getUserItem({ item: user }) {
    return (
        <ListItem
            key={user.id}
            bottomDivider
            onPress={() => {}}>
                <Avatar tittle={user.name} rounded source={user.avatarUrl && { uri: user.avatarUrl }}/>
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                </ListItem.Content>
        </ListItem>
    )
}

  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar animated={true} backgroundColor="#606060"/>
      <View style={ {flex: 9, height: '90%'}}>

      

      <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={getUserItem}
      />

      </View>

      <View style={{flex: 1}}>
        <Button style={[Styles.button, {width: 300}]} type="outline" title="Área do Desenvolvedor" 
        onPress={()=>{ props.navigation.navigate("DevArea")}} />
      </View>

    </SafeAreaView>
    );
  }