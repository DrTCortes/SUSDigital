import * as React from 'react';
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './components/HomeScreen'
import ListFuncionarios from './components/Funcionarios/ListFuncionarios'
import ListPacientes from './components/Pacientes/ListPacientes'

import { Button, Icon } from 'react-native-elements';


const Stack = createStackNavigator();

export default function App() {
  
    return (  
        <NavigationContainer>
          <Stack.Navigator 
            initialRouteName="Home"
        screenOptions={screenOptions}>
        <Stack.Screen  
          name="Home" 
          component={HomeScreen}
          options={({navigation}) => {
            return{
                title: "Modelo de Tela",
                headerRight: () => (
                  <Button type='clear' 
                  onPress={() => navigation.navigate("Funcionarios")}
                  icon={ <Icon name="add" size={25} color="#F2F4F8"/> } />)
                }
              }}
              />
            <Stack.Screen  
              name="Funcionarios"
              component={ListFuncionarios}
              />
    
            <Stack.Screen  
              name="Pacientes" 
              component={ListPacientes} 
              />
    
          </Stack.Navigator>
        </NavigationContainer>
    
      );
    }
    
    const screenOptions = {
      headerStyle: {
    backgroundColor: '#415A80',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}




// const opt = {
//   headerLeft: () => (
//     <TouchableOpacity onPress={navigation.openDrawer}>
//       <Text style={{margin: 8}}>Esquerdo</Text>
//     </TouchableOpacity>
//   )
//   };
//   const Drawer = createDrawerNavigator();

//   export default function App() {
   
//         return(
//           <NavigationContainer>
//           <Drawer.Navigator initialRouteName="Home">
//             <Drawer.Screen options={opt} name="Home" component={HomeScreen} />
//             <Drawer.Screen options={opt} name="Funcionarios" component={ListFuncionarios} />
//           </Drawer.Navigator>
//         </NavigationContainer>
 
//         );
//     }