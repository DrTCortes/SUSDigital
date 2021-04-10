import * as React from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import ListFuncionarios from './components/Funcionarios/ListFuncionarios'
import HomeScreen from './components/HomeScreen'
import ListPacientes from './components/Pacientes/ListPacientes'

// const opt = {
//     headerLeft: () => (
//       <TouchableOpacity onPress={navigation.openDrawer}>
//         <Text style={{margin: 100}}>Esquerdo</Text>
//       </TouchableOpacity>
//     )
//   };

  const Stack = createStackNavigator();

export default function App() {
  
  return (  
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen  name="Home" component={HomeScreen} />
        <Stack.Screen  name="Funcionarios" component={ListFuncionarios} />
        <Stack.Screen  name="Pacientes" component={ListPacientes} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}