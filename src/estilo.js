import React from "react"
import { Dimensions, StyleSheet } from "react-native"

const estilos = StyleSheet.create({
    ViewPrincipal:
    {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#F3B989',
    },
    BotaoView:
    {
        width: '100%',
        height: '90%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
    },
    BotaoViewRow:
    {
        flexGrow: 1,
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
    },
    Botao:
    {
        borderColor: '#211206',
        borderWidth: 1,
        borderRadius: 3,
        height: Dimensions.get('window').height/8,
        width: Dimensions.get("window").width/3.3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7D512D',
    },
    BotaoGrande:
    {
        borderColor: '#211206',
        borderWidth: 1,
        borderRadius: 3,
        height: Dimensions.get('window').height/8,
        width: Dimensions.get("window").width/2.15,
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
        borderRadius: 3,
        width: '95%',
        height: '15%',
        maxHeight: '15%',
        marginTop: 15,
        marginBottom: 10,
        flexDirection:'row',
        flexWrap: 'nowrap',
        backgroundColor: '#FFF',
        justifyContent: 'center',

    },
    VisorText:
    {
        fontSize: 72,
        color: '#000'
    },
})

export default estilos