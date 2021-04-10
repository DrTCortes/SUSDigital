import * as React from 'react';
import { View, TextInput, Button, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Espec from './Especialidades'


function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
      animated={true}
      backgroundColor="#606060"/>

      <View style={styles.header}>
        <View style={{flexDirection: 'row'}}>
          <TextInput style={styles.input}/>
          <Button color={'#0169B2'} title={'Entrar'} />
          <Button color={'#0169B2'} title={'Cadastre-se'} />
        </View>

      </View>

      <View style={styles.body}>
        <Espec name={'Titulo Especialidade'} description={'Descrição da Especialidade'}/> 
        <Espec name={'Titulo Especialidade'}/> 
        <Espec name={'Titulo Especialidade'}/> 
        <Espec name={'Titulo Especialidade'}/> 
        <Espec name={'Titulo Especialidade'}/> 
        <Espec name={'Titulo Especialidade'}/> 
      </View>

    </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      backgroundColor: '#fff'
    },
    header: {
      backgroundColor: '#0169B2',
      justifyContent: 'flex-start',
    },
    body: {
      justifyContent: 'space-around', 
      flexWrap: 'wrap',
      flexDirection: 'row',
    },
    input:{
      backgroundColor: '#fff',
      width: 200,
      margin: 10,
      borderRadius: 5,
    },
  })    
  export default HomeScreen