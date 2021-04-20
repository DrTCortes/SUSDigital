import React, {useContext} from 'react';
import { View, TextInput, SafeAreaView, StatusBar, FlatList, Alert } from 'react-native';
import { ListItem, Button, Icon, Avatar } from 'react-native-elements'
import Styles from '../styles';
import Context from '../context/AppContext'



export default props => {
  
  const { state, dispatch } = useContext(Context)

  
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
  function getEspecItem({ item: espec }) {
    return (
        <ListItem
            key={espec.id}
            bottomDivider
            onPress={() => {}}>
                <Avatar tittle={espec.name} rounded source={espec.avatarUrl && { uri: espec.avatarUrl }}/>
                <ListItem.Content>
                    <ListItem.Title>{espec.name}</ListItem.Title>
                    <ListItem.Subtitle>{espec.email}</ListItem.Subtitle>
                </ListItem.Content>
        </ListItem>
    )
}
  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar animated={true} backgroundColor="#606060"/>
      <View style={ {flex: 9, height: '90%'}}>

      

      <FlatList
                keyExtractor={func => func.id.toString()}
                data={state.funcs}
                renderItem={getFuncItem}
      />


      </View>

      <View style={{flex: 1}}>
        <Button style={[Styles.button, {width: 300}]} type="outline" title="Área do Desenvolvedor" 
        onPress={()=>{ props.navigation.navigate("DevArea")}} />
      </View>

    </SafeAreaView>
    );
  }