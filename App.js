import React from 'react';

import { createStackNavigator, HeaderTitle } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './components/HomeScreen'

import ListFuncionarios from './components/Funcionarios/ListFuncionarios'
import FormFunc from './components/Funcionarios/FormFunc'

import ListMedicos from './components/Medicos/ListaMedicos'
import FormMedicos from './components/Medicos/FormMedicos'

import ListEspecialidades from './components/Especialidades/ListEspecialidades'
import FormEspecialidades from './components/Especialidades/FormEspecialidades'

import ListPostos from './components/Postos/ListPostos'
import FormPostos from './components/Postos/FormPostos'

import ListPacientes from './components/Pacientes/ListPacientes'
import FormPacientes from './components/Pacientes/FormPacientes'

import DevArea from './components/Dev/DevArea'

import { Button, Icon } from 'react-native-elements';
import FuncsProvider from './components/Funcionarios/FuncContext';


const Stack = createStackNavigator();

export default function App() {
  
    return (  
      <FuncsProvider.Provider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          
          <Stack.Screen  
            name="Home" 
            component={HomeScreen}
            options={({navigation}) => {
              return{
                  title: "SUS Digital",
                  }}} />
              
            <Stack.Screen name="DevArea" component={DevArea}/> 


            <Stack.Screen name="Funcionarios" component={ListFuncionarios}
                options={({navigation}) => { return{ title: "Funcionários", headerRight: () => (
                        <Button type='clear' onPress={() => navigation.navigate("FormFunc")}
                        icon={ <Icon name="add" size={25} color="#F2F4F8"/> } />)}}}/> 
            <Stack.Screen name="FormFunc" component={FormFunc}/> 


            <Stack.Screen name="Medicos" component={ListMedicos}
                options={({navigation}) => { return{ title: "Médicos", headerRight: () => (
                        <Button type='clear' onPress={() => navigation.navigate("FormMedicos")}                        
                        icon={ <Icon name="add" size={25} color="#F2F4F8"/> } />)}}}/> 
            <Stack.Screen name="FormMedicos" component={FormMedicos}/> 
            
            <Stack.Screen name="Especialidades" component={ListEspecialidades}
                options={({navigation}) => { return{ title: "Especialidades", headerRight: () => (
                        <Button type='clear' onPress={() => navigation.navigate("FormEspecialidades")}
                        icon={ <Icon name="add" size={25} color="#F2F4F8"/> } />)}}}/> 
            <Stack.Screen name="FormEspecialidades" component={FormEspecialidades}/> 

            <Stack.Screen name="Postos" component={ListPostos}
                options={({navigation}) => { return{ title: "Postos", headerRight: () => (
                        <Button type='clear' onPress={() => navigation.navigate("FormPostos")}
                        icon={ <Icon name="add" size={25} color="#F2F4F8"/> } />)}}}/> 
            <Stack.Screen name="FormPostos" component={FormPostos}/> 

            <Stack.Screen name="Pacientes" component={ListPacientes}
                options={({navigation}) => { return{ title: "Pacientes", headerRight: () => (
                        <Button type='clear' onPress={() => navigation.navigate("FormPacientes")}
                        icon={ <Icon name="add" size={25} color="#F2F4F8"/> } />)}}}/> 
            <Stack.Screen name="FormPacientes" component={FormPacientes}/> 

    
          </Stack.Navigator>
        </NavigationContainer>
      </FuncsProvider.Provider>
      );
    }
    
  const screenOptions = {
  headerStyle: { backgroundColor: '#415A80'},
  headerTintColor: '#fff',
  headerTitleStyle: { fontWeight: 'bold'} }



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
