import React, { useContext } from 'react'
import { View, FlatList, Alert } from 'react-native'
import { ListItem, Button, Icon, Avatar } from 'react-native-elements'
import Context from '../../context/AppContext'

export default props => {

    const { state, dispatch } = useContext(Context)

    function confirmPostoDeletion(posto) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
            { text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deletePosto',
                        payload: posto,
                    })}
            },
            {
                text: 'Não'
            }
        ])}

    function getActions(posto) {
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate('FormPostos', posto)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                />
                <Button
                    onPress={() => dispatch({type: 'deletePosto', payload: posto})}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
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

    return (
        <View>
            <FlatList
                keyExtractor={posto => posto.id.toString()}
                data={state.postos}
                renderItem={ getPostoItem } />
        </View>
    )
}