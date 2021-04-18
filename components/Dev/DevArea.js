import React, {useContext} from 'react';
import { StyleSheet, View, FlatList, Alert } from 'react-native';

import { ListItem, Avatar, Button, Icon} from 'react-native-elements';
import Styles from '../styles';
  
export default props => {
return(
  <View style={[Styles.form, {margin: 1}]}>
    <Button style={Styles.button}  type='outline' title={"Funcionarios"} onPress={()=>{ props.navigation.navigate("Funcionarios")}}/>
    <Button style={Styles.button}  type='outline' title={"Médicos"} onPress={()=>{ props.navigation.navigate("Medicos")}}/>
    <Button style={Styles.button}  type='outline' title={"Especialidades"} onPress={()=>{ props.navigation.navigate("Especialidades")}}/>
    <Button style={Styles.button}  type='outline' title={"Postos"} onPress={()=>{ props.navigation.navigate("Postos")}}/>
    <Button style={Styles.button}  type='outline' title={"Pacientes"} onPress={()=>{ props.navigation.navigate("Pacientes")}}/>
    </View>
  )}