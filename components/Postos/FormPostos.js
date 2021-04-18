import React, { useState } from 'react';
import {Text, TextInput, View, Button } from 'react-native';
import Styles from '../styles'

export default ({route, navigation}) => { 
  const [postos, setPostos] = useState(route.params ? route.params :{})

  return(
    <View style={Styles.form}>
        <Text>Name</Text>
        <TextInput 
          onChangeText={name => setPostos({...postos, name})}
          placeholder="Informe o nome"
          value={postos.name}
          style={Styles.input}
        />
        <Text>Endereço</Text>
        <TextInput 
          onChangeText={endereco => setPostos({...postos, endereco})}
          placeholder="Informe o endereço"
          value={postos.endereco}
          style={Styles.input}
        />
        <Text>Especialidade</Text>
        <TextInput 
          onChangeText={especialidade => setPostos({...postos, especialidade})}
          placeholder="Informe a especialidade"
          value={postos.especialidade}
          style={Styles.input} 
        />
        <Button
        title="Salvar"
        onPress={() => {navigation.goBack()}} // é so jogar no data né?
        />
    </View>
  )
}
