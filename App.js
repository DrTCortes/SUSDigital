import React from 'react';

import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './components/HomeScreen/HomeScreen';

import ListConsultas from './components/HomeScreen/view/ListConsultas';
import FormConsultas from './components/HomeScreen/view/FormConsultas';

import ListFuncionarios from './components/Funcionarios/views/ListFunc';
import FormFunc from './components/Funcionarios/views/FormFunc';

import ListMedicos from './components/Medicos/views/ListMedicos'
import FormMedicos from './components/Medicos/views/FormMedicos'

import ListEspecialidades from './components/Especialidades/views/ListEspecialidades'
import FormEspecialidades from './components/Especialidades/views/FormEspecialidades'

import ListPostos from './components/Postos/views/ListPostos'
import FormPostos from './components/Postos/views/FormPostos'

import ListPacientes from './components/Pacientes/views/ListPacientes'
import FormPacientes from './components/Pacientes/views/FormPacientes'

import DevArea from './components/Dev/DevArea'

import { Button, Icon } from 'react-native-elements';
import { UsersProvider } from './components/context/AppContext';


const Stack = createStackNavigator();

export default props => {

    return (
      <UsersProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>

            <Stack.Screen name="Home" component={HomeScreen}
                options={({navigation}) => { return{ title: "SUSDigital", headerRight: () => (
                        <Button type='clear' title="Nova Consulta" onPress={() => navigation.navigate("FormConsultas")} />)}}}/>

            <Stack.Screen name="Consultas" component={ListConsultas}
                options={({navigation}) => { return{ title: "Consultas", headerRight: () => (
                        <Button type='clear' onPress={() => navigation.navigate("FormConsultas")}
                        icon={ <Icon name="add" size={25} color="#F2F4F8"/> } />)}}}/>
            <Stack.Screen name="FormConsultas" options={()=> {return{ title:"Formulário de Consultas"}}} component={FormConsultas}/>

            <Stack.Screen name="DevArea" component={DevArea}/>


            <Stack.Screen name="Funcionarios" component={ListFuncionarios}
                options={({navigation}) => { return{ title: "Funcionários", headerRight: () => (
                        <Button type='clear' onPress={() => navigation.navigate("FormFunc")}
                        icon={ <Icon name="add" size={25} color="#F2F4F8"/> } />)}}}/>
            <Stack.Screen name="FormFunc" options={()=> {return{ title:"Formulário de Consultas"}}} component={FormFunc}/>

            <Stack.Screen name="Medicos" component={ListMedicos}
                options={({navigation}) => { return{ title: "Médicos", headerRight: () => (
                        <Button type='clear' onPress={() => navigation.navigate("FormMedicos")}
                        icon={ <Icon name="add" size={25} color="#F2F4F8"/> } />)}}}/>
            <Stack.Screen name="FormMedicos" component={FormMedicos}/>

            <Stack.Screen name="Especialidades" component={ListEspecialidades}
                options={({navigation}) => { return{ title: "Especialidades", headerRight: () => (
                        <Button type='clear' onPress={() => navigation.navigate("FormEspec")}
                        icon={ <Icon name="add" size={25} color="#F2F4F8"/> } />)}}}/>
<<<<<<< HEAD
            <Stack.Screen name="FormEspec" options={()=>{return{title:"Dados da Especialidade"}}} component={FormEspecialidades}/>
=======
            <Stack.Screen name="Dados da Especialidade"  component={FormEspecialidades}/>
>>>>>>> 9bf03e2377c37e72b2092c3cd237f82b0f7ac33c

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
        </UsersProvider>
      )
    }

  const screenOptions = {
  headerStyle: { backgroundColor: '#415A80'},
  headerTintColor: '#fff',
  headerTitleStyle: { fontWeight: 'bold'} }
