import React, { useState } from 'react';
import {Text, TextInput, View, Button } from 'react-native';
import Styles from '../styles'

export default ({route, navigation}) => {
  const [func, setFunc] = useState(route.params ? route.params :{})
  return(
    <View style={Styles.form}>
        <Text>Name</Text>
        <TextInput 
          onChangeText={name => setFunc({...func, name})}
          placeholder="Informe o nome"
          value={func.name}
          style={Styles.input}
        />
        <Text>E-mail</Text>
        <TextInput 
          onChangeText={email => setFunc({...func, email})}
          placeholder="Informe o e-mail"
          value={func.email}
          style={Styles.input}
        />
        <Text>Url do Avatar</Text>
        <TextInput 
          onChangeText={avatarUrl => setFunc({...func, avatarUrl})}
          placeholder="Informe a Url do avatar"
          value={func.avatarUrl}
          style={Styles.input}
        />
        <Button
        title="Salvar"
        onPress={() => {navigation.goBack()}}
        />
    </View>
  )
}