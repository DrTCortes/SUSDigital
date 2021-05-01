import React, { useContext } from 'react'
import { View, FlatList, Alert, Image, TouchableOpacity } from 'react-native'
import { ListItem, Button, Icon, Avatar } from 'react-native-elements'
import AppContext from '../../context/AppContext'
import Styles from '../../styles'

export default props => {

    const { state, dispatch } = useContext(AppContext)

    function getActions(paciente) {
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate('FormPacientes', paciente)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="#FFF" />}
                />
                <Button
                    onPress={() => dispatch({type: 'deletePaciente', payload: paciente})}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="#FFF" />}
                />
            </>
        )
    }

    function getPacienteItem({ item: paciente }) {
        return (
            <TouchableOpacity style={[Styles.contentBox, {backgroundColor: '#188dbb'}]} key={paciente.id} bottomDivider rightElement={getActions(paciente)}
                onPress={() => props.navigation.navigate('InfoPacientes', paciente)}>
                    <Image style={Styles.imageIcon} rounded source={paciente.avatarUrl && { uri: paciente.avatarUrl }}/>
                    <ListItem.Content>
                        <ListItem.Title style={{color: '#FFF'}}>{paciente.name}</ListItem.Title>
                        <ListItem.Subtitle style={{color: '#c9c9c9'}}>{paciente.email}</ListItem.Subtitle>
                    </ListItem.Content>
                        <View style={{flexDirection:'row'}}>{getActions(paciente)}</View>
            </TouchableOpacity>
        )}

    return (
        <View style={[Styles.container, {alignItems: 'center'}]}>
            <FlatList
                keyExtractor={paciente => paciente.id.toString()}
                data={state.pacientes}
                renderItem={ getPacienteItem } />
        </View>
    )
}