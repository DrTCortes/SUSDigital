import React from 'react'
import {View, StyleSheet, Text, Button} from 'react-native'


export default props => {
    const {name, description, qtdVagas} = props
        
        return(
            <View style={styles.field}>
                <Text style={styles.name}>
                    {name}
                </Text>
                <Text style={styles.desc}>
                    {description}
                </Text>
                <View style={{flexDirection:'row', }}>
                    <Button title={"Editar"}/>
                    <Button title={"Excluir"}/>
                </View>
            </View>
        )
    }
    
    const styles = StyleSheet.create({
        field: {
            width: 150,
            height: 150,
            borderTopWidth: 4,
            borderRadius: 20,
            marginTop: 20,
            backgroundColor: '#F2F4F8',
            borderTopColor: '#415A80',
            padding: 10,
            alignContent: 'space-between'
        },
        name: {
            fontWeight: 'bold',
            fontSize: 15,
    
        },
        desc: {
            fontSize: 13,
            marginTop: 5,
    
        },
    })