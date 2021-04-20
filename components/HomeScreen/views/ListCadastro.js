import React, { useContext } from 'react'
import { View, FlatList, Alert } from 'react-native'
import { ListItem, Button, Icon, Avatar } from 'react-native-elements'
import Context from '../../context/AppContext'

export default props => {

    const { state, dispatch } = useContext(Context)

    function confirmCadastroDeletion(cadastro) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
            { text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deleteCadastro',
                        payload: cadastro,
                    })}
            },
            {
                text: 'Não'
            }
        ])}

    function getActions(cadastro) {
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate('FormCadastro', cadastro)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                />
                <Button
                    onPress={() => dispatch({type: 'deleteCadastro', payload: cadastro})}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />
            </>
        )
    }

    function getCadastroItem({ item: cadastro }) {
        return (
            <ListItem key={cadastro.id} bottomDivider rightElement={getActions(cadastro)}
                onPress={() => props.navigation.navigate('FormCadastro', cadastro)}>
                    <Avatar tittle={cadastro.name} rounded source={cadastro.avatarUrl && { uri: cadastro.avatarUrl }}/>
                    <ListItem.Content>
                        <ListItem.Title>{cadastro.name}</ListItem.Title>
                        <ListItem.Subtitle>{cadastro.email}</ListItem.Subtitle>
                    </ListItem.Content>
                        <View style={{flexDirection:'row'}}>{getActions(cadastro)}</View>
            </ListItem>
        )}

    return (
        <View>
            <FlatList
                keyExtractor={cadastro => cadastro.id.toString()}
                data={state.cadastros}
                renderItem={ getCadastroItem } />
        </View>
    )
}