import * as React from 'react';
import { View, Text, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ListFuncionarios from './components/Funcionarios/ListFuncionarios'
import HomeScreen from './components/HomeScreen'
import ListPacientes from './components/Pacientes/ListPacientes'

const opt = {
    headerLeft: () => (
      <TouchableOpacity onPress={navigation.openDrawer}>
        <Text style={{margin: 100}}>Esquerdo</Text>
      </TouchableOpacity>
    )
  };

const Drawer = createDrawerNavigator();

export default function App() {
  
  return (  
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen options={opt} name="Home" component={HomeScreen} />
        <Drawer.Screen options={opt} name="Funcionarios" component={ListFuncionarios} />
        <Drawer.Screen options={opt} name="Pacientes" component={ListPacientes} />
      </Drawer.Navigator>
    </NavigationContainer>
    
  );
}