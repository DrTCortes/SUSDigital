import React, { useState } from 'react'
import { StyleSheet, Text, View} from 'react-native'
import { Input } from 'react-native-elements';

export default ({route, navigation}) => {
    const [dev, setDev] = useState(route.params ? route.params : {})
return (
    <View>
        <Text>Teste da Area do desenvolvedor</Text>
        
    </View>
)

}
