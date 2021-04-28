import React, { useState, useContext } from 'react'
import { View, Image, Text} from 'react-native'
import { ListItem, Button, Icon, Avatar } from 'react-native-elements'
import Styles from '../../styles'
import AppContext from '../../context/AppContext'

export default ({route, navigation}) => {
    const [func, setFunc] = useState(route.params ? route.params : {})
    const { dispatch } = useContext(AppContext)

    return (
        <View style={[Styles.container, Styles.infoScreen]}>
            <View style={Styles.infoHeader}>

                <Button type='clear'  onPress={() => navigation.navigate("Especialidades")}
                            icon={ <Icon name="chevron-left" size={25} color="#188dbb"/> } />
                <Image style={Styles.ImageInfo} source={func.avatarUrl && { uri: func.avatarUrl }}/>
                {/* func.avatarUrl && { uri: func.avatarUrl } */}
                
                <View style={{alignItems: 'center', flex: 1, paddingVertical: 20, marginVertical: 20}}>
                    <Text style={Styles.infoText2}>{func.type}</Text>
                    <Text style={Styles.infoText}>{func.name}</Text>
                </View>

            </View>
            <View style={Styles.formImageInfo1}/>
            <View style={Styles.formImageInfo2}/>
            
        </View>
    )
}