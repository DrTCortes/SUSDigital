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

    function getActions(medico) {
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate('FormMedicos', medico)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                />
                <Button
                    onPress={() => dispatch({type: 'deleteMedico', payload: medico})}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />
            </>
        )
    }

    function getMedicoItem({ item: medico }) {
        return (
            <ListItem key={medico.id} bottomDivider rightElement={getActions(medico)}
                onPress={() => props.navigation.navigate('FormMedicos', medico)}>
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