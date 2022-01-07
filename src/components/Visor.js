import React from "react"
import {Text, SafeAreaView,StyleSheet } from "react-native"

// import estilos from "../estilo"

function Visor (props){
    const estilo = StyleSheet.create({
        Visor:
        {
            borderColor: '#211206',
            borderWidth: 5,
            borderRadius: 20,
            flex: 1,
            flexDirection:'row',
            flexWrap: 'nowrap',
            backgroundColor: '#FFF',
            alignItems: 'center',
            justifyContent: 'flex-end',
    
        },
        VisorText:
        {
            marginRight: '3%',
            marginLeft: '3%',
            textAlign: 'right',
            fontSize: props.fontSize,
            color: '#000'
        },
    })
    return (
        <SafeAreaView style={estilo.Visor}>
            <Text style={estilo.VisorText}>{props.display}</Text>
        </SafeAreaView>
    )
}


export default Visor