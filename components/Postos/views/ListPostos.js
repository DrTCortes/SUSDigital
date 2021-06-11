import React, { useContext } from 'react'
import { View, FlatList, Alert, Image, TouchableOpacity } from 'react-native'
import { ListItem, Button, Icon, Avatar } from 'react-native-elements'
import Context from '../../context/AppContext'
import Styles from '../../styles'

export default props => {

    const { state, dispatch } = useContext(Context)

    function getActions(posto) {
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate('FormPostos', posto)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="white" />}
                />
                <Button
                    onPress={() => dispatch({type: 'deletePosto', payload: posto})}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="white" />}
                />
            </>
        )
    }

    function getPostoItem({ item:posto }) {
        return (
            <ListItem key={posto.id} bottomDivider rightElement={getActions(posto)}
                onPress={() => props.navigation.navigate('FormPostos', posto)}>
                    <Avatar tittle={posto.name} rounded source={posto.avatarUrl && { uri: posto.avatarUrl }}/>
                    <ListItem.Content>
                        <ListItem.Title>{posto.name}</ListItem.Title>
                        <ListItem.Subtitle>{posto.endereco}</ListItem.Subtitle>
                        <ListItem.Subtitle>{posto.especialidadeposto}</ListItem.Subtitle>
                    </ListItem.Content>
                        <View style={{flexDirection:'row'}}>{getActions(posto)}</View>
            </ListItem>
        )}
        
        function getPostoItem({ item: posto }) {
            return (
                <TouchableOpacity 
                    style={[Styles.contentBox, {backgroundColor: '#188dbb'}]} 
                    key={posto.id} 
                    bottomDivider
                    rightElement={getActions(posto)}
                    onPress={() => props.navigation.navigate('InfoPosto', posto)}
                >
                    <Image style={Styles.imageIcon} rounded source={posto.avatarUrl && { uri: posto.avatarUrl }}/>
                    <ListItem.Content>
                        <ListItem.Title style={{color: '#FFF'}}>{posto.name}</ListItem.Title>
                        <ListItem.Subtitle 
                            style={{
                                color: '#c9c9c9',
                                maxWidth: '85%',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis'
                            }}>
                            {posto.endereco}
                        </ListItem.Subtitle>
                    </ListItem.Content>
                            <View style={{flexDirection:'row'}}>{getActions(posto)}</View>
                </TouchableOpacity>
            )}

    return (
        <View style={[Styles.container, {alignItems: 'center'}]}>
            
            <FlatList
                keyExtractor={posto => posto.id.toString()}
                data={state.postos}
                renderItem={ getPostoItem } />
        </View>
    )
}