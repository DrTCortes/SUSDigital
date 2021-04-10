import React from 'react';
import { StyleSheet, Text, View} from 'react-native'


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.txtG}>Projeto SUSDigital</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'top',
  },
});
