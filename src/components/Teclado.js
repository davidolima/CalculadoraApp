import React from "react"
import { SafeAreaView, TouchableHighlight, Text, View } from "react-native"

import estilos from "../estilo"

function Teclado(props) {
    return (
        <SafeAreaView style={estilos.BotaoView}>
            <>
                <TouchableHighlight label='C' onPress={() => props.handlingVisor('C')} style={[estilos.Botao, estilos.BotaoGrande]} >
                    <Text style={estilos.BotaoText}>C</Text>
                </TouchableHighlight>

                <TouchableHighlight label='del' onPress={() => props.handlingVisor('del')} style={[estilos.Botao, estilos.BotaoGrande]} >
                    <Text style={estilos.BotaoText}>⌫</Text>
                </TouchableHighlight>

                <TouchableHighlight label='7' onPress={() => props.handlingVisor(7)} style={estilos.Botao} >
                    <Text style={estilos.BotaoText}>7</Text>
                </TouchableHighlight>

                <TouchableHighlight label='8' onPress={() => props.handlingVisor(8)} style={estilos.Botao} >
                    <Text style={estilos.BotaoText}>8</Text>
                </TouchableHighlight>

                <TouchableHighlight label='9' onPress={() => props.handlingVisor(9)} style={estilos.Botao} >
                    <Text style={estilos.BotaoText}>9</Text>
                </TouchableHighlight>

                <TouchableHighlight label='/' onPress={() => props.handlingVisor('/')} style={estilos.Botao} >
                    <Text style={estilos.BotaoText}>÷</Text>
                </TouchableHighlight>

                <TouchableHighlight label='4' onPress={() => props.handlingVisor(4)} style={estilos.Botao} >
                    <Text style={estilos.BotaoText}>4</Text>
                </TouchableHighlight>

                <TouchableHighlight label='5' onPress={() => props.handlingVisor(5)} style={estilos.Botao} >
                    <Text style={estilos.BotaoText}>5</Text>
                </TouchableHighlight>

                <TouchableHighlight label='6' onPress={() => props.handlingVisor(6)} style={estilos.Botao} >
                    <Text style={estilos.BotaoText}>6</Text>
                </TouchableHighlight>

                <TouchableHighlight label='x' onPress={() => props.handlingVisor('x')} style={estilos.Botao} >
                    <Text style={estilos.BotaoText}>X</Text>
                </TouchableHighlight>

                <TouchableHighlight label='1' onPress={() => props.handlingVisor(1)} style={estilos.Botao} >
                    <Text style={estilos.BotaoText}>1</Text>
                </TouchableHighlight>

                <TouchableHighlight label='2' onPress={() => props.handlingVisor(2)} style={estilos.Botao} >
                    <Text style={estilos.BotaoText}>2</Text>
                </TouchableHighlight>

                <TouchableHighlight label='3' onPress={() => props.handlingVisor(3)} style={estilos.Botao} >
                    <Text style={estilos.BotaoText}>3</Text>
                </TouchableHighlight>

                <TouchableHighlight label='-' onPress={() => props.handlingVisor('-')} style={estilos.Botao} >
                    <Text style={estilos.BotaoText}>−</Text>
                </TouchableHighlight>

                <TouchableHighlight label='mm' onPress={() => props.handlingVisor('mm')} style={estilos.Botao} >
                    <Text style={estilos.BotaoText}>+/-</Text>
                </TouchableHighlight>

                <TouchableHighlight label='0' onPress={() => props.handlingVisor('0')} style={estilos.Botao} >
                    <Text style={estilos.BotaoText}>0</Text>
                </TouchableHighlight>

                <TouchableHighlight label='.' onPress={() => props.handlingVisor('.')} style={estilos.Botao} >
                    <Text style={estilos.BotaoText}>.</Text>
                </TouchableHighlight>

                <TouchableHighlight label='+' onPress={() => props.handlingVisor('+')} style={estilos.Botao} >
                    <Text style={estilos.BotaoText}>+</Text>
                </TouchableHighlight>

                <TouchableHighlight label='=' onPress={() => props.handlingVisor('=')} style={[estilos.Botao, estilos.BotaoGrande]} >
                    <Text style={estilos.BotaoText}>=</Text>
                </TouchableHighlight>
            </>
        </SafeAreaView>
    )
}

export default Teclado