import React from 'react';

import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './components/HomeScreen/HomeScreen';

import ListConsultas from './components/HomeScreen/view/ListConsultas';
import FormConsultas from './components/HomeScreen/view/FormConsultas';

import ListFuncionarios from './components/Funcionarios/views/ListFunc';
import FormFunc from './components/Funcionarios/views/FormFunc';
import InfoFunc from './components/Funcionarios/views/InfoFunc';

import ListMedicos from './components/Medicos/views/ListMedicos';
import FormMedicos from './components/Medicos/views/FormMedicos';
import infoMedico from './components/Medicos/views/infoMedico';

import ListEspecialidades from './components/Especialidades/views/ListEspecialidades'
import FormEspecialidades from './components/Especialidades/views/FormEspecialidades'
import InfoEspec from './components/Especialidades/views/InfoEspecialidades';

import ListPostos from './components/Postos/views/ListPostos'
import FormPostos from './components/Postos/views/FormPostos'
import InfoPosto from './components/Postos/views/InfoPosto';

import ListPacientes from './components/Pacientes/views/ListPacientes'
import FormPacientes from './components/Pacientes/views/FormPacientes'
import InfoPacientes from './components/Pacientes/views/InfoPacientes'

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
                        <Button type='clear' onPress={() => navigation.navigate("FormConsultas")} 
                        icon={ <Icon name="add" size={25} color="#F2F4F8"/> } />)}}}/>

            <Stack.Screen name="Consultas" component={ListConsultas}
                options={({navigation}) => { return{ title: "Consultas", headerRight: () => (
                        <Button type='clear' onPress={() => navigation.navigate("FormConsultas")}
                        icon={ <Icon name="add" size={25} color="#F2F4F8"/> } />)}}}/>
            <Stack.Screen name="FormConsultas" options={()=> {return{ title:"Formulário de Consultas"}}} component={FormConsultas}/>

            <Stack.Screen name="DevArea" options={()=> {return{ title:"Área Administrativa"}}} component={DevArea}/>


            <Stack.Screen name="Funcionarios" component={ListFuncionarios}
                options={({navigation}) => { return{ title: "Funcionários", headerRight: () => (
                        <Button type='clear' onPress={() => navigation.navigate("FormFunc")}
                        icon={ <Icon name="add" size={25} color="#F2F4F8"/> } />)}}}/>
            <Stack.Screen name="FormFunc" options={()=> {return{ title:"Formulário de Funcionários"}}} component={FormFunc}/>
            <Stack.Screen name="InfoFunc" options={()=> {return{headerShown: false}}} component={InfoFunc}/>

            <Stack.Screen name="Medicos" component={ListMedicos}
                options={({navigation}) => { return{ title: "Médicos", headerRight: () => (
                        <Button type='clear' onPress={() => navigation.navigate("FormMedicos")}
                        icon={ <Icon name="add" size={25} color="#F2F4F8"/> } />)}}}/>
            <Stack.Screen name="FormMedicos" options={()=> {return{ title:"Formulário de Médicos"}}} component={FormMedicos}/>
            <Stack.Screen name="infoMedico" options={()=> {return{headerShown: false}}} component={infoMedico}/>
            
            <Stack.Screen name="Especialidades" component={ListEspecialidades}
                options={({navigation}) => { return{ title: "Especialidades", headerRight: () => (
                        <Button type='clear' onPress={() => navigation.navigate("FormEspec")}
                        icon={ <Icon name="add" size={25} color="#F2F4F8"/> } />)}}}/>
            <Stack.Screen name="FormEspec" options={()=>{return{title:"Dados da Especialidade"}}} component={FormEspecialidades}/>
            <Stack.Screen name="InfoEspec" options={()=> {return{headerShown: false}}} component={InfoEspec}/>

            <Stack.Screen name="Postos" component={ListPostos}
                options={({navigation}) => { return{ title: "Postos", headerRight: () => (
                        <Button type='clear' onPress={() => navigation.navigate("FormPostos")}
                        icon={ <Icon name="add" size={25} color="#F2F4F8"/> } />)}}}/>
            <Stack.Screen name="FormPostos" options={()=> {return{ title:"Cadastros de postos"}}} component={FormPostos}/>
            <Stack.Screen name="InfoPosto" options={()=> {return{headerShown: false}}} component={InfoPosto}/>
            
            <Stack.Screen name="Pacientes" component={ListPacientes}
                options={({navigation}) => { return{ title: "Pacientes", headerRight: () => (
                        <Button type='clear' onPress={() => navigation.navigate("FormPacientes")}
                        icon={ <Icon name="add" size={25} color="#F2F4F8"/> } />)}}}/> 
            <Stack.Screen name="FormPacientes" options={()=> {return{ title:"Formulário de Pacientes"}}} component={FormPacientes}/>
            <Stack.Screen name="InfoPacientes" options={()=> {return{headerShown: false}}} component={InfoPacientes}/>

          </Stack.Navigator>
        </NavigationContainer>
        </UsersProvider>
      )
    }

  const screenOptions = {
  headerStyle: { backgroundColor: '#188dbb'},
  headerTintColor: '#fff',
  headerTitleStyle: { fontWeight: 'bold'} }
