import React, { useContext } from 'react'
import { View, FlatList, Alert, Image, TouchableOpacity } from 'react-native'
import { ListItem, Button, Icon, Avatar } from 'react-native-elements'
import Context from '../../context/AppContext'
import Styles from '../../styles'

export default props => {

    const { state, dispatch } = useContext(Context)

    function confirmMedicoDeletion(medico) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
            { text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deleteMedico',
                        payload: medico,
                    })}
            },
            {
                text: 'Não'
            }
        ])}
    //Botões de edit e delete 
    function getActions(medico) {
        return (
            <>
                <Button  //ao clicar no botão edit o cadastro de medico é exibido para alteração
                    onPress={() => props.navigation.navigate('FormMedicos', medico)} 
                    type="clear"
                    icon={<Icon name="edit" size={25} color="#FFF" />}
                />
                <Button
                    onPress={() => dispatch({type: 'deleteMedico', payload: medico})}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="#FFF" />}
                />
            </>
        )
    }

    function getMedicoItem({ item: medico }) {
        return (
            //Exibe a lista de medico, com nome,email e foto
            <TouchableOpacity style={[Styles.contentBox, {backgroundColor: '#188dbb'}]} key={medico.id} bottomDivider rightElement={getActions(medico)}
                    onPress={() => props.navigation.navigate('infoMedico', medico)}>
                     <Avatar  style={Styles.imageIcon} tittle={medico.name} rounded source={medico.avatarUrl && { uri: medico.avatarUrl }}/> 
                    <ListItem.Content>
                        <ListItem.Title style={{color: '#FFF'}}>{medico.name}</ListItem.Title>
                        <ListItem.Subtitle style={{color: '#c9c9c9'}}>{medico.email}</ListItem.Subtitle>
                    </ListItem.Content>
                        <View style={{flexDirection:'row'}}>{getActions(medico)}</View>
            </TouchableOpacity>                        
            // <ListItem key={medico.id} bottomDivider rightElement={getActions(medico)}            
            // </ListItem>
        )}

    return (
        <View style={[Styles.container, {alignItems: 'center'}]}>
            <FlatList
                keyExtractor={medico => medico.id.toString()}
                data={state.medicos}
                renderItem={ getMedicoItem } />
        </View>
    )
}

