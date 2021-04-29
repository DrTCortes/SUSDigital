import React, { useContext } from 'react'
import { View, FlatList, Alert, Image, TouchableOpacity } from 'react-native'
import { ListItem, Button, Icon, Avatar } from 'react-native-elements'
import AppContext from '../../context/AppContext'
import Styles from '../../styles'

export default props => {

    const { state, dispatch } = useContext(AppContext)

    function getActions(func) {
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate('FormFunc', func)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="#FFF" />}
                />
                <Button
                    onPress={() => dispatch({type: 'deleteFunc', payload: func})}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="#FFF" />}
                />
            </>
        )
    }

    function getFuncItem({ item: func }) {
        return (
            <TouchableOpacity style={[Styles.contentBox, {backgroundColor: '#188dbb'}]} key={func.id} bottomDivider rightElement={getActions(func)}
                onPress={() => props.navigation.navigate('InfoFunc', func)}>
                    <Image style={Styles.imageIcon} rounded source={func.avatarUrl && { uri: func.avatarUrl }}/>
                    <ListItem.Content>
                        <ListItem.Title style={{color: '#FFF'}}>{func.name}</ListItem.Title>
                        <ListItem.Subtitle style={{color: '#c9c9c9'}}>{func.email}</ListItem.Subtitle>
                    </ListItem.Content>
                        <View style={{flexDirection:'row'}}>{getActions(func)}</View>
            </TouchableOpacity>
        )}

    return (
        <View style={[Styles.container, {alignItems: 'center'}]}>
            <FlatList
                keyExtractor={func => func.id.toString()}
                data={state.funcs}
                renderItem={ getFuncItem } />
        </View>
    )
}