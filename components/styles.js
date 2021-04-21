import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
      flex: 1,
        backgroundColor: '#F2F4F8',
        justifyContent: 'center',
      },
      header: {
      backgroundColor: '#415A80',
      justifyContent: 'flex-start',
      },
      body: {
        justifyContent: 'space-around', 
        flexWrap: 'wrap',
      },
      form :{
        padding: 10,
      },
      input:{
        backgroundColor: '#fff',
        height: 40,
        marginBottom: 10,
        borderRadius: 5,
        paddingHorizontal: 10,
      },
      button:{
        margin: 4,
        backgroundColor: '#FFF',
        fontWeight: "bold",
    
      },
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
    });

// Paleta de Cores:
// #415A80
// #A5D4DC
// #D7E2E9
// #F2F4F8
