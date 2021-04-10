import React from 'react'
import {View, StyleSheet, Text} from 'react-native'


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
            backgroundColor: '#f0f0f0',
            borderTopColor: '#606060',
        },
        name: {
            fontWeight: 'bold',
            fontSize: 15,
            paddingHorizontal: 15,
    
        },
        desc: {
            fontSize: 12,
            paddingHorizontal: 15,
    
        },
    })