import React, { useState } from "react"
import { SafeAreaView } from 'react-native'

import estilos from "./estilo"
import Teclado from './components/Teclado'
import Visor from './components/Visor'


export default () => {
    let [displayText, setDisplayText] = useState('---')
    let [previousNumber, setPreviousNumber] = useState(0)


    function sequenciaOperacoes(defaultf) {
        if (previousNumber == NaN || previousNumber == '---'){
            return
        }
        switch (displayText[0]) {
            case '+':
                setPreviousNumber(previousNumber + parseFloat(displayText.slice(1)))
                // setDisplayText('+ ')
                break
            case '-':
                setPreviousNumber(previousNumber - parseFloat(displayText.slice(1)))
                // setDisplayText('- ')
                break
            case '/':
                setPreviousNumber(previousNumber / parseFloat(displayText.slice(1)))
                // setDisplayText('/ ')
                break
            case 'x':
                setPreviousNumber(previousNumber * parseFloat(displayText.slice(1)))
                // setDisplayText('x ')
                break
            default:
                defaultf()
        }
    }

    function handlingVisor(numero) {
        switch (numero) {
            case '+':
                if (displayText == '---'){
                    return
                }
                function soma() {
                    setPreviousNumber(parseFloat(displayText))
                }
                sequenciaOperacoes(soma)
                setDisplayText('+ ')
                break
            case '-':
                if (displayText == '---'){
                    return
                }
                function menos() {
                    setPreviousNumber(parseFloat(displayText))
                }
                sequenciaOperacoes(menos)
                setDisplayText('- ')
                break
            case '/':
                if (displayText == '---'){
                    return
                }
                function divisao() {
                    setPreviousNumber(parseFloat(displayText))
                }
                sequenciaOperacoes(divisao)
                setDisplayText('/ ')
                break
            case 'x':
                if (displayText == '---'){
                    return
                }
                function vezes() {
                    setPreviousNumber(parseFloat(displayText))
                }
                sequenciaOperacoes(vezes)
                setDisplayText('x ')
                break
            case '.':
                if (displayText == '---'){
                    return
                }
                if (String(displayText).search(/[.]/g) == (-1)){
                    setDisplayText(displayText + '.')
                }
                break
            case 'C':
                setDisplayText('---')
                setPreviousNumber(NaN)
                break
            case '=':
                if (displayText == '---'||  previousNumber == NaN || displayText == '/ '|| displayText == 'x '|| displayText == '- '|| displayText == '+ '){
                    return
                }
                switch (displayText[0]) {
                    case '+':
                        setDisplayText(previousNumber + parseFloat(displayText.slice(1)))
                        break
                    case '-':
                        setDisplayText(previousNumber - parseFloat(displayText.slice(1)))
                        break
                    case 'x':
                        setDisplayText(previousNumber * parseFloat(displayText.slice(1)))
                        break
                    case '/':
                        setDisplayText(previousNumber / parseFloat(displayText.slice(1)))
                        break
                }
                if (displayText == 19090812){
                    setDisplayText('♡')
                }
                break
            default:
                if (displayText == '---' || String(displayText) == 'NaN') {
                    setDisplayText(numero)
                } else {
                    setDisplayText(String(displayText) + numero)
                }
                break

        }
    }

    return (
        <SafeAreaView style={estilos.ViewPrincipal}>
            <Visor display={displayText} />
            <Teclado handlingVisor={handlingVisor} />
        </SafeAreaView>
    )
}