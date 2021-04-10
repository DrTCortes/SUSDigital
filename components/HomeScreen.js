import * as React from 'react';
import { View, TextInput, Button, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Espec from './Especialidades'


function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
      animated={true}
      backgroundColor="#606060"/>

      
          {/* HEADER INICIAL COM BARRA DE BUSCA */}
       
          <View style={styles.header}>
        <View style={{flexDirection: 'row'}}>
          <TextInput style={styles.input}/>
          <Button color={'#415A80'} title={'Entrar'} />
          <Button color={'#415A80'} title={'Cadastre-se'} />
        </View>
      </View>

      <View style={styles.body}>
        <Espec name={'Titulo Especialidade'} description={'Descrição da Especialidade'}/> 
        <Espec name={'Titulo Especialidade'} description={'Descrição da Especialidade'}/> 
        <Espec name={'Titulo Especialidade'} description={'Descrição da Especialidade'}/> 
        <Espec name={'Titulo Especialidade'} description={'Descrição da Especialidade'}/> 
        <Espec name={'Titulo Especialidade'} description={'Descrição da Especialidade'}/> 
        <Espec name={'Titulo Especialidade'} description={'Descrição da Especialidade'}/> 
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
      backgroundColor: '#415A80',
      justifyContent: 'flex-start',
    },
    body: {
      justifyContent: 'space-around', 
      flexWrap: 'wrap',
      flexDirection: 'row',
    },
    input:{
      backgroundColor: '#F2F4F8',
      width: 200,
      margin: 10,
      borderRadius: 5,
    },
  })    
  export default HomeScreen
// Paleta de Cores:
// #415A80
// #A5D4DC
// #D7E2E9
// #F2F4F8