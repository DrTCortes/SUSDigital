import React, {useContext} from 'react';
import { View, FlatList, Alert } from 'react-native';

import { ListItem, Avatar, Button, Icon} from 'react-native-elements';
  
export default props => {
return(
  <View>
    <Button title={"Funcionarios"} onPress={()=>{ props.navigation.navigate("Funcionarios")}}/>
    <Button title={"Médicos"} onPress={()=>{ props.navigation.navigate("Medicos")}}/>
    <Button title={"Especialidades"} onPress={()=>{ props.navigation.navigate("Especialidades")}}/>
    <Button title={"Postos"} onPress={()=>{ props.navigation.navigate("Postos")}}/>
    </View>
  )}
