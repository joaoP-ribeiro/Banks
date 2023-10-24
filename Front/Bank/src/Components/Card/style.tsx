import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
        marginTop: '5%',
        width: '100%',
        height: 225,
        justifyContent: 'center',
        alignItems: 'center',
    },

    backgroundImage: {
        flex: 1,
        width: 354,
        
    },

    container_card:{
        flex: 1,
        flexDirection: 'column',
    },

    container_saldo:{
        height: '60%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    container_inf:{
        height: '40%',
        flexDirection: 'row',
    },

    number:{
        marginLeft: 10,
        justifyContent: 'center',
        width: '70%'
    },

    date:{
        justifyContent: 'center',
        width: '30%'
    },

    text1:{
        fontSize: 17,
        color: '#F4F4F4',
    },

    text2:{
        fontSize: 15,
        color: '#F4F4F4',
        fontWeight: 'bold'
    },

    centeredText: {
        position: 'absolute',
        top: '70%',
        left: '50%',
        transform: [{ translateX: -50 }, { translateY: -50 }],
    }
});

export default styles;
