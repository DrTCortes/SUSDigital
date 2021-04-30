import React, { useContext } from 'react'
import { View, FlatList, Alert } from 'react-native'
import { ListItem, Button, Icon, Avatar } from 'react-native-elements'
import Context from '../../context/AppContext'

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
                    icon={<Icon name="edit" size={25} color="#188dbb" />}
                />
                <Button
                    onPress={() => dispatch({type: 'deleteMedico', payload: medico})}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="#188dbb" />}
                />
            </>
        )
    }

    function getMedicoItem({ item: medico }) {
        return (
            //Exibe a lista de medico, com nome,email e foto
            <ListItem key={medico.id} bottomDivider rightElement={getActions(medico)}
                    onPress={() => props.navigation.navigate('infoMedico', medico)}>
                    <Avatar tittle={medico.name} rounded source={medico.avatarUrl && { uri: medico.avatarUrl }}/>
                    <ListItem.Content>
                        <ListItem.Title>{medico.name}</ListItem.Title>
                        <ListItem.Subtitle>{medico.email}</ListItem.Subtitle>
                    </ListItem.Content>
                        <View style={{flexDirection:'row'}}>{getActions(medico)}</View>
            </ListItem>
        )}

    return (
        <View>
            <FlatList
                keyExtractor={medico => medico.id.toString()}
                data={state.medicos}
                renderItem={ getMedicoItem } />
        </View>
    )
}