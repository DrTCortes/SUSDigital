import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F2F4F8',
      },
      header: {
      backgroundColor: '#188dbb',
      justifyContent: 'flex-start',
      },
      body: {
        justifyContent: 'space-around', 
        flexWrap: 'wrap',
      },
      form :{
        marginVertical: 10,
        marginHorizontal: 20,
      },
      input: {
        height: 40,
        padding: 10,
        borderColor: '#208bdc',
        borderWidth: 1,
        marginBottom: 15,
        backgroundColor: '#fff',
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
        backgroundColor: '#188dbb',
        borderTopColor: '#415A80',
        padding: 10,
        alignContent: 'space-between'
    },
    text:{
      fontFamily: 'serif',
      fontWeight: 'bold',
      fontSize: 16,
      color:'#415A80',
      padding: 10,
      marginTop: 10,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,

    },
    desc: {
        fontSize: 13,
        marginTop: 5,

    },
    infoScreen:{
      backgroundColor: '#188dbb',
      alignItems: 'center',
    },
    ImageInfo: {
      width: "100%",
      height: 300,
      backgroundColor: "#fff",
      
    },
    infoText: {
      fontFamily: 'serif',
      fontWeight: 'bold',
      fontSize: 30,
      color:'#fff',
      transform: [{translateY: -180}],
      textShadowColor: "#000",
      textShadowRadius: 5,
    },
    infoText2: {
      fontFamily: 'serif',
      fontWeight: 'bold',
      fontSize: 16,
      color:'#02cdd0',
      transform: [{translateY: -180}],
      textShadowColor: "#000",
      textShadowRadius: 5,
    },
    formImageInfo1: {
      width: "120%",
      height: 100,
      backgroundColor: '#02cdd0',
      transform: [{skewY: "-6deg"}, {translateY: -22}],
    },
    formImageInfo2: {
      width: "120%",
      height: 100,
      backgroundColor: '#188dbb',
      transform: [{skewY: "-10deg"}, {translateY: -100}]
    },
    });

// Paleta de Cores:
// #415A80
// #A5D4DC
// #D7E2E9
// #F2F4F8
