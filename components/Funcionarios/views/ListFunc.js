import React, { useContext } from 'react'
import { View, FlatList, Alert } from 'react-native'
import { ListItem, Button, Icon, Avatar } from 'react-native-elements'
import AppContext from '../../context/AppContext'

export default props => {

    const { state, dispatch } = useContext(AppContext)

    function confirmFuncDeletion(func) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
            { text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deleteFunc',
                        payload: func,
                    })}
            },
            {
                text: 'Não'
            }
        ])}

    function getActions(func) {
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate('FormFunc', func)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="#188dbb" />}
                />
                <Button
                    onPress={() => dispatch({type: 'deleteFunc', payload: func})}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="#188dbb" />}
                />
            </>
        )
    }

    function getFuncItem({ item: func }) {
        return (
            <ListItem key={func.id} bottomDivider rightElement={getActions(func)}
                onPress={() => props.navigation.navigate('InfoFunc', func)}>
                    <Avatar tittle={func.name} rounded source={func.avatarUrl && { uri: func.avatarUrl }}/>
                    <ListItem.Content>
                        <ListItem.Title>{func.name}</ListItem.Title>
                        <ListItem.Subtitle>{func.email}</ListItem.Subtitle>
                    </ListItem.Content>
                        <View style={{flexDirection:'row'}}>{getActions(func)}</View>
            </ListItem>
        )}

    return (
        <View>
            <FlatList
                keyExtractor={func => func.id.toString()}
                data={state.funcs}
                renderItem={ getFuncItem } />
        </View>
    )
}