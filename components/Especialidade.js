import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

import params from './params'

export default props => {
    const {mined, opened, nearMines, exploded, flagged} = props
    
        const styleField = [styles.field]
        if (!opened && !exploded) styleField.push(styles.regular)
    
    
        let color = null
    
    
        return(
            <View style={styleField}>
                <Text style={[styles.label, {color: color }]}>
                    {nearMines} </Text>
            </View>
        )
    }
    
    const styles = StyleSheet.create({
        field: {
            height: params.blockSize,
            width: params.blockSize,
            borderWidth: params.borderSize,
        },
        regular: {
            backgroundColor: '#999',
            borderLeftColor: '#CCC',
            borderTopColor: '#CCC',
            borderRightColor: '#333',
            borderBottomColor: '#333',
        },
        opened: {
            backgroundColor: '#999',
            borderColor: '#777',
            alignItems: 'center',
            justifyContent: 'center'
        },
        label: {
            fontWeight: 'bold',
            fontSize: params.fontSize,
    
        },
        exploded: {
            backgroundColor: 'red',
            borderColor: 'red',
        }
    })