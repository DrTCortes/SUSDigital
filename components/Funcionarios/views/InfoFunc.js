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
            <Image style={Styles.ImageInfo} source={func.avatarUrl && { uri: func.avatarUrl }}/>
            <View style={Styles.formImageInfo1}/>
            <View style={Styles.formImageInfo2}/>
            {console.log(func.isEnabled)}
            <Text style={Styles.infoText2}>{func.type}</Text>
            <Text style={Styles.infoText}>{func.name}</Text>
        </View>
    )
}