import { Dimensions, StyleSheet } from "react-native"

const estilos = StyleSheet.create({
    ViewPrincipal:
    {
        
        alignItems: 'center',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        flex: 1,
        backgroundColor: '#F3B989',
    },
    BotaoView:
    {
        // backgroundColor: '#9d9d9d',
        flexDirection: 'row',
        flex:5,
        alignItems: 'center',
        // marginTop: '10%',
        // padding: '1%',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
    },
    Botao:
    {
        borderColor: '#211206',
        borderWidth: 0.5,
        borderRadius: 50,
        margin: '0.5%',
        marginTop: '2.75%',
        flexGrow: 1,
        // height: Dimensions.get('window').width/4.2,
        // width: Dimensions.get("window").width/4.2,
        height: Dimensions.get('window').height/9,
        width: Dimensions.get("window").width/5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7D512D',
    },
    BotaoGrande:
    {
        flexGrow: 1,
        width: Dimensions.get("window").width/2.1,
    },
    BotaoText:
    {   
        includeFontPadding: false,
        textAlign: 'center',
        textAlignVertical: 'center',
        color:'#211206',
        fontSize: Dimensions.get('window').height/12
    },
    VisorView:
    {
        width: '95%',
        marginTop: '2%',
        marginBottom: '2%',
        // backgroundColor: '#f00',
        flexGrow: 1
    },

})

export default estilos