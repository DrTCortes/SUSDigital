import React, { useContext } from 'react'
import { View, FlatList, Alert } from 'react-native'
import { ListItem, Button, Icon, Avatar } from 'react-native-elements'
import UsersContext from '../../context/UsersContext'

export default props => {

    const { state, dispatch } = useContext(UsersContext)

    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
            { text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deleteUser',
                        payload: user,
                    })}
            },
            {
                text: 'Não'
            }
        ])}

    function getActions(user) {
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate('FormFunc', user)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                />
                <Button
                    onPress={() => dispatch({type: 'deleteUser', payload: user})}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />
            </>
        )
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem key={user.id} bottomDivider rightElement={getActions(user)}
                onPress={() => props.navigation.navigate('FormFunc', user)}>
                    <Avatar tittle={user.name} rounded source={user.avatarUrl && { uri: user.avatarUrl }}/>
                    <ListItem.Content>
                        <ListItem.Title>{user.name}</ListItem.Title>
                        <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                    </ListItem.Content>
                        <View style={{flexDirection:'row'}}>{getActions(user)}</View>
            </ListItem>
        )}

    return (
        <View>
            <FlatList
                keyExtractor={user => user.id.toString()}
                data={state.users}
                renderItem={ getUserItem } />
        </View>
    )
}