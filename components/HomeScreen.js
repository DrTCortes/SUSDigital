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

      <View style={styles.body}>

      </View>

    </SafeAreaView>
    );
  }

  export default HomeScreen
