import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import dataFunc from './data'
import Espec from '../Especialidades'

export default props => {
  return(
    <View>
     <FlatList
      keyExtractor={dataFunc => dataFunc.id.toString()}
      data={dataFunc}
     />

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  
  