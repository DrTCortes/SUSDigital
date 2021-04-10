import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

import params from './params'

export default props => {
    const {name, description, nearMines, exploded, qtdVagas} = props
        
        return(
            <View style={styles.field}>
                <Text style={styles.name}>
                    {description}
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
            // backgroundColor: 'red',
            paddingHorizontal: 15,
    
        },
        desc: {
            fontSize: 12,
            paddingHorizontal: 15,
    
        },
    })