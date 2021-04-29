import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
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
        width: '100%',
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
    },
    infoHeader:{
      width: '100%',
      backgroundColor: '#E9E9E9',
      flexDirection: 'row',
    },
    ImageInfo: {
      width: 130,
      height: 130,
      marginVertical: 20,
      borderRadius: 200,
      backgroundColor: "#fff",
      shadowRadius: 5,
      shadowColor: "red"
    },
    infoText: {
      fontFamily: 'serif',
      fontWeight: 'bold',
      fontSize: 24,
      textAlign: 'center',
      color:'#188dbb',
    },
    infoText2: {
      fontFamily: 'serif',
      fontWeight: 'bold',
      fontSize: 16,
      color:'#02cdd0',
    },
    formImageInfo1: {
      width: "100%",
      height: 50,
      backgroundColor: '#02cdd0',
      transform: [{skewY: "-6deg"}, {translateY: -25}],
    }, 
    formImageInfo2: {
      width: "100%",
      height: 50,
      backgroundColor: '#188dbb',
      transform: [{skewY: "-10deg"}, {translateY: -45}],
    },
    imageIcon: {
      width: 40,
      height: 40,
      marginHorizontal: 20,
      borderRadius: 20,
      backgroundColor: "#fff",
      shadowRadius: 5,
      shadowColor: "red"
      
    },
    contentBox: {
      width: 320,
      height: 60,
      borderRadius: 2,
      borderTopLeftRadius: 30,
      borderBottomRightRadius: 30,
      marginVertical: 10,
      alignItems: 'center',
      flexDirection: 'row',
      alignContent: 'center',
    },
    contentBox2: {
      width: 300,
      borderRadius: 2,
      borderRadius: 10,
      borderColor: '#188dbb',
      borderWidth: 5,
    },
    horizontalCenter: {
      width: "100%",
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    infoBox: {
      width: '100%',
      paddingHorizontal: 10,
      paddingTop: 5,
    },
    infoBoxContent: {
      backgroundColor: '#188dbb',
      textAlign: 'center',
      paddingVertical: 10,
    }
    });

// Paleta de Cores:
// #415A80
// #A5D4DC
// #D7E2E9
// #F2F4F8
