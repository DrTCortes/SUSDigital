import React, { useState } from 'react'
import { StyleSheet, Text, View} from 'react-native'
import { Input } from 'react-native-elements';
import Styles from '../styles'

export default ({route, navigation}) => {
    const [medicos, setMedicos] = useState(route.params ? route.params : {})
return (
    <View style={Styles.form}>
        <Text>Nome</Text>
        <Input
           style={style.input}
           placeholder='Informe o Nome'            
           onChangeText={name => setMedicos({...medicos, name})} 
           value={medicos.name}  
           style={Styles.input}     
        />
        <Text>Email</Text>
        <Input
           placeholder='Informe o E-Mail' 
           onChangeText={email => setMedicos({...medicos, email})} 
           value={medicos.email} 
           style={Styles.input}          
        />
    </View>
)

}

// const style = StyleSheet.create({
//     input: {
//         height: 40,
//         borderColor: 'gray',
//         borderWidth: 1,
//         marginBottom: 10,                
//     }

// })