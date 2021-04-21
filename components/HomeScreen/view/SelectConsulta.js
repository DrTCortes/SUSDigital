import React, { useContext } from 'react'
import { View, FlatList, Alert } from 'react-native'
import { ListItem, Button, Icon, Avatar } from 'react-native-elements'
import AppContext from '../../context/AppContext'

export default props => {

    const { state, dispatch } = useContext(AppContext)

    function getSelection(select) {
        return (
            <>
            </>
        )
    }

    function getSelectItem({ item: select }) {
        return (
            <ListItem key={select.id} bottomDivider
                onPress={() => getSelection(select)}>
                    <Avatar tittle={select.id} rounded source={select.avatarUrl && { uri: select.avatarUrl }}/>
                    <ListItem.Content>
                        <ListItem.Title>{select.name}</ListItem.Title>
                    </ListItem.Content>
            </ListItem>
        )}

    return (
        <View>
            <FlatList
                keyExtractor={select => select.id.toString()}
                data={state}
                renderItem={ getSelectItem } />
                
        </View>
    )
}