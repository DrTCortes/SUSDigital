import React, { useContext } from 'react'
import { View, FlatList, Alert } from 'react-native'
import { ListItem, Button, Icon, Avatar } from 'react-native-elements'
import Context from '../../context/AppContext'

export default props => {

    const { state, dispatch } = useContext(Context)

    function confirmPacienteDeletion(paciente) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
            { text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deletePaciente',
                        payload: paciente,
                    })}
            },
            {
                text: 'Não'
            }
        ])}

    function getActions(paciente) {
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate('FormPacientes', paciente)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                />
                <Button
                    onPress={() => dispatch({type: 'deletePaciente', payload: paciente})}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />
            </>
        )
    }

    function getPacienteItem({ item: paciente }) {
        return (
            <ListItem key={paciente.id} bottomDivider rightElement={getActions(paciente)}
                onPress={() => props.navigation.navigate('FormPacientes', paciente)}>
                    <Avatar tittle={paciente.name} rounded source={paciente.avatarUrl && { uri: paciente.avatarUrl }}/>
                    <ListItem.Content>
                        <ListItem.Title>{paciente.name}</ListItem.Title>
                        <ListItem.Subtitle>{paciente.email}</ListItem.Subtitle>
                    </ListItem.Content>
                        <View style={{flexDirection:'row'}}>{getActions(paciente)}</View>
            </ListItem>
        )}

    return (
        <View>
            <FlatList
                keyExtractor={paciente => paciente.id.toString()}
                data={state.pacientes}
                renderItem={ getPacienteItem } />
        </View>
    )
}