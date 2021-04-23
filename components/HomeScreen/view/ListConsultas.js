import React, { useContext } from 'react'
import { View, FlatList, Alert } from 'react-native'
import { ListItem, Button, Icon, Avatar } from 'react-native-elements'
import AppContext from '../../context/AppContext'

export default props => {

    const { state, dispatch } = useContext(AppContext)

    function confirmConsultaDeletion(consulta) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
            { text: 'Sim',
                onPress() {
                    dispatch({
                        type: 'deleteConsulta',
                        payload: consulta,
                    })}
            },
            {
                text: 'Não'
            }
        ])}

    function getActions(consulta) {
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate('FormConsultas', consulta)}
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                />
                <Button
                    onPress={() => dispatch({type: 'deleteConsulta', payload: consulta})}
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />
            </>
        )
    }

    function getConsultaItem({ item: consulta }) {
        return (
            <ListItem key={consulta.c_id} bottomDivider rightElement={getActions(consulta)}
                onPress={() => props.navigation.navigate('FormConsultas', consulta)}>
                    <Avatar tittle={consulta.c_id} rounded source={consulta.c_avatarUrl && { uri: consulta.c_avatarUrl }}/>
                    <ListItem.Content>
                        <ListItem.Title>{consulta.c_func}</ListItem.Title>
                        <ListItem.Subtitle>{consulta.c_paciente}</ListItem.Subtitle>
                    </ListItem.Content>
                        <View style={{flexDirection:'row'}}>{getActions(consulta)}</View>
            </ListItem>
        )}

    return (
        <View>
            <FlatList
                keyExtractor={consulta => consulta.c_id.toString()}
                data={state.consultas}
                renderItem={ getConsultaItem } />
        </View>
    )
}