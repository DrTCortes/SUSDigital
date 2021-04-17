import React, { useState } from 'react'
import { StyleSheet, Text, View} from 'react-native'
import { Input } from 'react-native-elements';

export default ({route, navigation}) => {
    const [user, setUser] = useState(route.params ? route.params : {})
return (
    <View>
        <Text>Nome</Text>
        <Input
           style={style.input}
           placeholder='Informe o Nome'            
           onChangeText={name => setUser({...user, name})} 
           value={user.name}       
        />
        <Text>Email</Text>
        <Input
           placeholder='Informe o E-Mail' 
           onChangeText={email => setUser({...user, email})} 
           value={user.email}       
        />
    </View>
)

}

const style = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,                
    }

})