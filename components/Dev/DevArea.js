import React, {useContext} from 'react';
import { View, FlatList, Alert } from 'react-native';

import { ListItem, Avatar, Button, Icon} from 'react-native-elements';
import Styles from '../styles';
  
export default props => {
return(
  <View style={[Styles.form, {margin: 1}]}>
    <Button type='clear' title={"Funcionarios"} onPress={()=>{ props.navigation.navigate("Funcionarios")}}/>
    <Button title={"Médicos"} onPress={()=>{ props.navigation.navigate("Medicos")}}/>
    <Button title={"Especialidades"} onPress={()=>{ props.navigation.navigate("Especialidades")}}/>
    <Button title={"Postos"} onPress={()=>{ props.navigation.navigate("Postos")}}/>
    <Button title={"Pacientes"} onPress={()=>{ props.navigation.navigate("Pacientes")}}/>
    </View>
  )}
