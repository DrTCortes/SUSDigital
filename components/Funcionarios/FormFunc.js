
import React, { useState } from 'react';
import {Text, View } from 'react-native';

export default props => {
  const [func, setFunc] = useState(props.route.params ? props.route.params :{})
  return(
    <View>
        <Text></Text>
    </View>
  )
}