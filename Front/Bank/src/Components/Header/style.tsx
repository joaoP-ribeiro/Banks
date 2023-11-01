import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: '10%',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: '8%'
    },

    column1:{
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        width: '17%'
    },

    column2:{
        height: '100%',
        justifyContent: 'center',
        padding: 10,
        width: '63%'
    },

    column3:{
        height: '100%',
        justifyContent: 'center',
        padding: 10,
        width: '20%'
    },

    text:{
        color: '#FFF',
        fontSize: 27,
        fontWeight: 'bold'
    },

    contFistLetter:{
        height: 60,
        backgroundColor: '#7200E3',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },

    img:{
        width: 60,
        height: 60,
        borderRadius: 20
    },

    
    
})
export default styles