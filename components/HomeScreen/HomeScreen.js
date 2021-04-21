import React, {useContext} from 'react';
import { View, TextInput, SafeAreaView, StatusBar, FlatList, Alert, Text } from 'react-native';
import { ListItem, Button, Icon, Avatar } from 'react-native-elements'
import Styles from '../styles';
import AppContext from '../context/AppContext'



export default props => {
  
  const { state, dispatch } = useContext(AppContext)

  function getConsultaItem({ item: consulta }) {
    return (
        <ListItem key={consulta.c_id} bottomDivider
        onPress={() => props.navigation.navigate('FormConsultas', consulta)}>
            <Avatar tittle={consulta.c_id} rounded source={consulta.c_avatarUrl && { uri: consulta.c_avatarUrl }}/>
            <ListItem.Content>
                <ListItem.Title>{consulta.c_paciente}</ListItem.Title>
                <ListItem.Subtitle>{consulta.c_especialidade} </ListItem.Subtitle>
                <ListItem.Subtitle>{consulta.name} </ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Content>
                <ListItem.Subtitle>{consulta.c_posto}</ListItem.Subtitle>
                <ListItem.Subtitle>{consulta.c_medico}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )}
  
  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar animated={true} backgroundColor="#606060"/>
      <View style={ {flex: 9}}>

      <FlatList
                keyExtractor={consulta => consulta.c_id.toString()}
                data={state.consultas}
                renderItem={getConsultaItem}
      />

      </View>

      <View style={{flex: 1, alignItems: 'center'}}>
        <Button style={[Styles.button, {width: 300}]} type="outline" title="Área do Desenvolvedor" 
        onPress={()=>{ props.navigation.navigate("DevArea")}} />
      </View>

    </SafeAreaView>
    );
  }