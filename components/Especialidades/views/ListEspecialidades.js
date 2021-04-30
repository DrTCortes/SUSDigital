import React, { useContext } from 'react'
import { View, FlatList, Alert, Image, TouchableOpacity } from 'react-native'
import { ListItem, Button, Icon, Avatar } from 'react-native-elements'
import AppContext from '../../context/AppContext'
import Styles from '../../styles'

export default props => {

    const { state, dispatch } = useContext(AppContext)

    function getActions(espec) {
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate('FormEspec', espec)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="#FFF" />}
                />
                <Button
                    onPress={() => dispatch({type: 'deleteEspec', payload: espec})}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="#FFF" />}
                />
            </>
        )
    }

    function getEspecItem({ item: espec }) {
        return (
            <TouchableOpacity style={[Styles.contentBox, {backgroundColor: '#188dbb'}]} key={espec.id} bottomDivider rightElement={getActions(espec)}
                onPress={() => props.navigation.navigate('InfoEspec', espec)}>
                    <Image style={Styles.imageIcon} rounded source={espec.avatarUrl && { uri: espec.avatarUrl }}/>
                    <ListItem.Content>
                        <ListItem.Title style={{color: '#FFF'}}>{espec.name}</ListItem.Title>
                        <ListItem.Subtitle style={{color: '#c9c9c9'}}>{espec.email}</ListItem.Subtitle>
                    </ListItem.Content>
                        <View style={{flexDirection:'row'}}>{getActions(espec)}</View>
            </TouchableOpacity>
        )}

    return (
        <View style={[Styles.container, {alignItems: 'center'}]}>
            <FlatList
                keyExtractor={espec => espec.id.toString()}
                data={state.especs}
                renderItem={ getEspecItem } />
        </View>
    )
}