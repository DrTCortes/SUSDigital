import React, {useContext} from 'react';
import { View, FlatList, Alert } from 'react-native';

import dataMedico from './data'
import { ListItem, Avatar, Button, Icon} from 'react-native-elements';
  
export default props => {

  
  function confirmMedicoDeletion(medicos){
    Alert.alert('Excluir Médico?', 'Deseja excluir o Médicos?',[
        { 
            text: 'Sim',
            onPress() {
                       console.warn('delete ' + medicos.id)	
            }
          },
              {
            text: 'Não'
          }    
        ])  
  }   
 

  function getMedicoItem({item: medicos}){
    return(
        <ListItem key={medicos.id} bottomDivider>
        <Avatar                              
        tittle={medicos.name}                
        source={{ uri: medicos.avatarUrl }}                
        Subtitle={medicos.email}                             
        onPress={() => props.navigation.navigate('FormMedicos',medicos)}            
        rounded                
        />                                
        <ListItem.Content>                    
            <ListItem.Title>{medicos.name}</ListItem.Title>                    
            <ListItem.Subtitle>{medicos.email}</ListItem.Subtitle>                                                                      
        </ListItem.Content>
        <Button
            onPress={() => {
                props.navigation.navigate('FormMedicos', medicos);
            }}            
            type="clear"
            icon={<Icon name='edit' size={25} color='orange'/>}
        />
        <Button 
            onPress={() => {confirmMedicoDeletion(medicos)}}            
            type="clear"
            icon={<Icon name='delete' size={25} color='red'/>}
        />                                                                       
    </ListItem>

    // <ListItem   key={medicos.id} onPress={()=> props.navigation.navigate("FormMedicos", medicos)} bottomDivider>
    //   <Avatar tittle={medicos.name} rounded source={medicos.avatarUrl && { uri: medicos.avatarUrl }}/>
    //   <ListItem.Content>
    //       <ListItem.Title>{medicos.name}</ListItem.Title>
    //       <ListItem.Subtitle>{medicos.email}</ListItem.Subtitle>
    //     </ListItem.Content>
    //       <View style={{flexDirection:'row'}}>{getAction(medicos)}</View>
    // </ListItem>

    
)}

return(
  <View>
     <FlatList
      keyExtractor={medicos => medicos.id.toString()}
      data={dataMedico}
      renderItem={getMedicoItem}
      />
    </View>
  )}
