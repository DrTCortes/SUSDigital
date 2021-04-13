import * as React from 'react';
import { View, TextInput, Button, SafeAreaView, StatusBar } from 'react-native';
import ContentBox from './ContentBox'
import styles from './styles'


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

      </View>

    </SafeAreaView>
    );
  }

  export default HomeScreen