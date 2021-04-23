import React, { useContext } from 'react'
import { View, FlatList, Alert } from 'react-native'
import { ListItem, Button, Icon, Avatar } from 'react-native-elements'
import Context from '../../context/AppContext'

export default props => {

    const { state, dispatch } = useContext(Context)

    //Função para exibir um modal de confirmação de deletar a especialidade
    function confirmEspecDeletion(espec) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
            { text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deleteEspec',
                        payload: espec,
                    })}
            },
            {
                text: 'Não'
            }
        ])}

    //Função onde ficam os botões de editar e excluir especialidade
    function getActions(espec) {
        return (
            <>
                {/* Botão para editar */}
                <Button
                    onPress={() => props.navigation.navigate('Dados da Especialidade', espec)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                />

                {/* Botão para excluir */}
                <Button
                    onPress={() => dispatch({type: 'deleteEspec', payload: espec})}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />
            </>
        )
    }

    function getEspecItem({ item: espec }) {
        return (
            <ListItem key={espec.id} bottomDivider rightElement={getActions(espec)}
                onPress={() => props.navigation.navigate('Dados da Especialidade', espec)}>
                    <Avatar tittle={espec.name} rounded source={espec.avatarUrl && { uri: espec.avatarUrl }}/>
                    <ListItem.Content>
                        <ListItem.Title>{espec.name}</ListItem.Title>
                        <ListItem.Subtitle>{espec.descricao}</ListItem.Subtitle>
                    </ListItem.Content>
                        <View style={{flexDirection:'row'}}>{getActions(espec)}</View>
            </ListItem>
        )}

    return (
        <View>
            <FlatList
                keyExtractor={espec => espec.id.toString()}
                data={state.especs}
                renderItem={ getEspecItem } />
        </View>
    )
}