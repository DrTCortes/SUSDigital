import React, {useContext} from 'react';
import { View, TextInput, SafeAreaView, StatusBar, FlatList, Alert } from 'react-native';
import { ListItem, Button, Icon, Avatar } from 'react-native-elements'
import Styles from '../styles';
import AppContext from '../context/AppContext'



export default props => {
  
  const { state, dispatch } = useContext(AppContext)

  
  function getFuncItem({ item: func }) {
    return (
        <ListItem
            key={func.id}
            bottomDivider
            onPress={() => {}}>
                <Avatar tittle={func.name} rounded source={func.avatarUrl && { uri: func.avatarUrl }}/>
                <ListItem.Content>
                    <ListItem.Title>{func.name}</ListItem.Title>
                    <ListItem.Subtitle>{func.email}</ListItem.Subtitle>
                </ListItem.Content>
        </ListItem>
    )
}
  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar animated={true} backgroundColor="#606060"/>
      <View style={ {flex: 9}}>

      

      <FlatList
                keyExtractor={func => func.id.toString()}
                data={state.funcs}
                renderItem={getFuncItem}
      />
      <FlatList
                keyExtractor={espec => espec.id.toString()}
                data={state.especs}
                renderItem={getFuncItem}
      />

      </View>

      <View style={{flex: 1, alignItems: 'center'}}>
        <Button style={[Styles.button, {width: 300}]} type="outline" title="Área do Desenvolvedor" 
        onPress={()=>{ props.navigation.navigate("DevArea")}} />
      </View>

    </SafeAreaView>
    );
  }