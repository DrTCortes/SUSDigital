import React from 'react';

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './components/HomeScreen'
import ListFuncionarios from './components/Funcionarios/ListFuncionarios'
import FormFunc from './components/Funcionarios/FormFunc'
import ListMedicos from './components/Medicos/ListaMedicos'
import FormMedicos from './components/Medicos/FormMedicos'
import DevArea from './components/Dev/DevArea'
import AreaDev from './components/Dev/AreaDev'

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
                  headerRight: () => (
                    <Button type='clear' 
                    title={"Area do Dev"}                    
                    onPress={() => navigation.navigate("AreaDev")}
                    />)
              }
            }
           } 
          />

        <Stack.Screen
            name="AreaDev"
            component={AreaDev}
            options= {{
                title: "Área do Desenvolvedor "
            }}
        />

            {/* <Stack.Screen name="DevArea" component={DevArea} 
              options={({navigation}) => { return{ title: "DevArea", headerRight: () => (
              <Button type='clear' onPress={() => navigation.navigate("DevArea")}
              icon={ <Icon name="edite" size={25} color="#F2F4F8"/> } />)}}}
            />  */}


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
    
// Teste

//         return(
//           <NavigationContainer>
//           <Drawer.Navigator initialRouteName="Home">
//             <Drawer.Screen options={opt} name="Home" component={HomeScreen} />
//             <Drawer.Screen options={opt} name="Funcionarios" component={ListFuncionarios} />
//           </Drawer.Navigator>
//         </NavigationContainer>
 
//         );
//     }
