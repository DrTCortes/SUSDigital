import * as React from 'react';
import { View, TextInput, Button, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Espec from './Especialidade'


function HomeScreen({ navigation }) {
    return (
      <SafeAreaView style={styles.container}>
      <StatusBar
      animated={true}
      backgroundColor="#606060"/>

      <View style={styles.header}>
        <View style={styles.sectionHeader}>
          <TextInput style={styles.input}/>
          <Button style={styles.button} color={'#0169B2'} title={'Entrar'} />
          <Button color={'#0169B2'} title={'Cadastre-se'} />
        </View>
      </View>
          <Espec/>
    </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    header: {
      backgroundColor: '#0169B2',
      width: '100%',
      justifyContent: 'flex-start',
    },
    sectionHeader: {
      flexDirection: 'row',
    },
    input:{
      backgroundColor: '#fff',
      width: 200,
      margin: 10,
      borderRadius: 5,
    }
  })    
  export default HomeScreen
  