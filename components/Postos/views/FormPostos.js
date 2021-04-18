import React, { useState } from 'react';
import {Text, TextInput, View, Button, StyleSheet } from 'react-native';
import UsersContext from '../context/PostosContext'

export default ({route, navigation}) => { 
  const [postos, setPostos] = useState(route.params ? route.params :{})
  const { dispatch } = useContext(UsersContext)

  return(
    <View style={style.form}>
      <Text>Name</Text>
      <TextInput 
        onChangeText={name => setPostos({...postos, name})}
        placeholder="Informe o nome"
        value={postos.name}
        style={style.input}
      />
      <Text>Endereço</Text>
      <TextInput 
        onChangeText={endereco => setPostos({...postos, endereco})}
        placeholder="Informe o endereço"
        value={postos.endereco}
        style={style.input}
      />
      <Text>Especialidade</Text>
      <TextInput 
        onChangeText={especialidade => setPostos({...postos, especialidade})}
        placeholder="Informe a especialidade"
        value={postos.especialidade}
        style={style.input} 
      />
      <Text>Estado</Text>
      <TextInput 
        onChangeText={estado => setPostos({...postos, estado})}
        placeholder="Informe a especialidade"
        value={postos.estado}
        style={style.input} 
        />
      <Text>Cidade</Text>
      <TextInput 
        onChangeText={cidade => setPostos({...postos, cidade})}
        placeholder="Informe a especialidade"
        value={postos.cidade}
        style={style.input} 
      />
      <Button
        title="Salvar"
        onPress={() => {
          dispatch({
            type: postos.id ? 'updatePostos' : 'createPosto',
            payload: postos
          })
          navigation.goBack()
        }} 
      />
    </View>
  )
}

const style = StyleSheet.create({
  form: {
      padding: 12
  },
  input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 15,
  }
})
