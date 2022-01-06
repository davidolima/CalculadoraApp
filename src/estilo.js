import React from "react"
import { Dimensions, StyleSheet } from "react-native"

const estilos = StyleSheet.create({
    ViewPrincipal:
    {
        alignItems: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#F3B989',
    },
    BotaoView:
    {
        // backgroundColor: '#9d9d9d',
        width: '100%',
        height: '90%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
    },
    BotaoViewRow:
    {
        // backgroundColor: '#1f1f1f',
        flexGrow: 1,
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
    },
    Botao:
    {
        borderColor: '#211206',
        borderWidth: 0.5,
        borderRadius: 50,
        height: Dimensions.get('window').width/4.2,
        // width: Dimensions.get("window").width/3.3,
        width: Dimensions.get("window").width/4.2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7D512D',
    },
    BotaoGrande:
    {
        borderColor: '#211206',
        borderWidth: 0.5,
        borderRadius: 50,
        height: Dimensions.get('window').width/4,
        // width: Dimensions.get("window").width/2.15,
        width: Dimensions.get("window").width/2.1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7D512D',  
    },
    BotaoText:
    {   
        includeFontPadding: false,
        textAlign: 'center',
        textAlignVertical: 'center',
        // maxHeight: Dimensions.get('window').height/8 - 5,
        color:'#211206',
        fontSize: 90
    },
    Visor:
    {
        borderColor: '#211206',
        borderWidth: 5,
        borderRadius: 20,
        width: '95%',
        height: '15%',
        maxHeight: '15%',
        marginTop: 15,
        marginBottom: 10,
        flexDirection:'row',
        flexWrap: 'nowrap',
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'flex-end',

    },
    VisorText:
    {
        marginRight: 15,
        marginLeft: 15,
        fontSize: 72,
        color: '#000'
    },
})

export default estilos