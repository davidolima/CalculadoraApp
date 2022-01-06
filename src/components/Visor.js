import React from "react"
import { Button, Text, View } from "react-native"

import estilos from "../estilo"

function Visor (props){
    return (
        <View style={estilos.Visor}>
            <Text style={estilos.VisorText}>{props.display}</Text>
        </View>
    )
}

export default Visor