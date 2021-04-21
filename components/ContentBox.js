import React from 'react'
import {View, Text, Button} from 'react-native'
import styles from './styles'


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

// Implementação do ContentBox
// function HomeScreen({ navigation }) {
//     return (
//       <SafeAreaView>
//         <StatusBar
//         animated={true}
//         backgroundColor="#606060"/>
  
//         <View style={styles.body}>
//           <ContentBox name={'Titulo Especialidade'} description={'Descrição da Especialidade'}/> 
//           <ContentBox name={'Titulo Especialidade'} description={'Descrição da Especialidade'}/> 
//           <ContentBox name={'Titulo Especialidade'} description={'Descrição da Especialidade'}/> 
//           <ContentBox name={'Titulo Especialidade'} description={'Descrição da Especialidade'}/> 
//           <ContentBox name={'Titulo Especialidade'} description={'Descrição da Especialidade'}/> 
//           <ContentBox name={'Titulo Especialidade'} description={'Descrição da Especialidade'}/> 
//         </View>
  
//       </SafeAreaView>
//       );
//     }