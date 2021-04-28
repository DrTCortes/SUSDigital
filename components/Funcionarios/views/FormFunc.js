import React, { useState, useContext } from 'react'
import { Text, View, TextInput, Switch } from 'react-native'
import {Button, Slider} from 'react-native-elements'
import AppContext from '../../context/AppContext'
import Styles from '../../styles'

export default ({route, navigation}) => {
    const [func, setFunc] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(AppContext)

    return (
        <View style={Styles.form}>
            <Text>Nome</Text>
            <TextInput
                style={Styles.input}
                onChangeText={name => setFunc({...func, name})}
                placeholder="Informe o Nome"
                value={func.name}
            />
            <Text>Email</Text>
            <TextInput
                style={Styles.input}
                onChangeText={email => setFunc({...func, email})}
                placeholder="Informe o E-mail"
                value={func.email}
            />
            <Text style={{marginBottom: 15}}>Deseja receber novidades por email?
            <Switch
                style={{marginHorizontal: 5}}
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={func.isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={isEnabled => setFunc({...func, isEnabled})}
                value={func.isEnabled}
             />
             </Text>
            <Text>URL do Avatar</Text>
            <TextInput
                style={Styles.input}
                onChangeText={avatarUrl => setFunc({...func, avatarUrl})}
                placeholder="Informe a URL do Avatar"
                value={func.avatarUrl}
            />
            <Slider
                thumbStyle={{ height: 10, width: 10, backgroundColor: '#188dbb'}}
                value={func.Slider}
                onValueChange={Slider => setFunc({...func, Slider})}
            />
            <Button
                style={Styles.button}  
                type='outline'
                title="Salvar"
                onPress={}
            />
        </View>
    )
}