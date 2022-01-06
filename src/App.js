import React, { useState } from "react"
import { SafeAreaView } from 'react-native'

import estilos from "./estilo"
import Teclado from './components/Teclado'
import Visor from './components/Visor'


export default () => {
    let [displayText, setDisplayText] = useState('---')
    let [previousNumber, setPreviousNumber] = useState(0)
    let [previousOp, setPreviousOp] = useState([])


    function sequenciaOperacoes(defaultf) {
        if (previousNumber == NaN || previousNumber == '---'){
            return
        }
        switch (displayText[0]) {
            case '+':
                setPreviousNumber(previousNumber + parseFloat(displayText.slice(1)))
                setPreviousOp(['+ ', parseFloat(displayText.slice(1))])
                break
            case '-':
                setPreviousNumber(previousNumber - parseFloat(displayText.slice(1)))
                setPreviousOp(['- ', parseFloat(displayText.slice(1))])
                break
            case '/':
                setPreviousNumber(previousNumber / parseFloat(displayText.slice(1)))
                setPreviousOp(['/ ', parseFloat(displayText.slice(1))])
                break
            case 'x':
                setPreviousNumber(previousNumber * parseFloat(displayText.slice(1)))
                setPreviousOp(['x ', parseFloat(displayText.slice(1))])
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
                if (displayText == '---'|| displayText == '/ '|| displayText == 'x '|| displayText == '- '|| displayText == '+ '){
                    return
                }
                if (['+','-','x','/'].includes(displayText[0])){
                    switch (displayText[0]) {
                        case '+':
                            setDisplayText(previousNumber + parseFloat(displayText.slice(1)))
                            setPreviousOp(['+ ', parseFloat(displayText.slice(1))])
                            break
                        case '-':
                            setDisplayText(previousNumber - parseFloat(displayText.slice(1)))
                            setPreviousOp(['- ', parseFloat(displayText.slice(1))])
                            break
                        case 'x':
                            setDisplayText(previousNumber * parseFloat(displayText.slice(1)))
                            setPreviousOp(['x ', parseFloat(displayText.slice(1))])
                            break
                        case '/':
                            setDisplayText(previousNumber / parseFloat(displayText.slice(1)))
                            setPreviousOp(['/ ', parseFloat(displayText.slice(1))])
                            break
                    }
                } else if (previousOp) {
                    setPreviousNumber(parseFloat(displayText))
                    setDisplayText(previousOp)
                }
                if (displayText == 19090812){
                    setDisplayText('♡')
                }
                break
            case 'del':
                if (displayText == '---'||  displayText == 'NaN' || displayText == '/ '|| displayText == 'x '|| displayText == '- '|| displayText == '+ '){
                    return
                }
                setDisplayText(String(displayText).slice(0, -1))
                break
            case 'mm':
                if (displayText == '---'||  previousNumber == NaN || displayText == '/ '|| displayText == 'x '|| displayText == '- '|| displayText == '+ '){
                    return
                }
                setDisplayText(parseFloat(displayText)*-1)
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