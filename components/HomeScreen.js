import * as React from 'react';
import { View, TextInput, SafeAreaView, StatusBar } from 'react-native';
import {Button} from 'react-native-elements'
import ContentBox from './ContentBox'
import Styles from './styles';


export default props => {
  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar
      animated={true}
      backgroundColor="#606060"/>
      <View style={ {flex: 9, height: '90%'}} ></View>
      <View style={{flex: 1}}>

        <Button style={[Styles.button, {width: 300}]} type="outline" title="Área do Desenvolvedor" 
        onPress={()=>{ props.navigation.navigate("DevArea")}} />
      </View>

    </SafeAreaView>
    );
  }

