import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    row: {
       marginTop: 20,
       width: '100%',
       height: 40,
       flexDirection: 'row'
    },

    container_icon:{
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    icon:{
        width: 40,
        height: 40,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    container_inf:{
        width: '60%',
        flexDirection: 'column'
    },

    name:{
        height: '60%',
        
    },

    text:{
        fontSize: 20,
        fontWeight: 'bold'
    },

    infos:{
        height: '40%',
        flexDirection: 'row',
    },

    info:{
        flex: 1,
        flexDirection: 'row',
        gap: 12
    },

    tipe:{
        fontSize: 12,
        color: '#FF1577',
        fontWeight: 'bold'
    },

    container_value:{
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },

    value: {
        fontSize: 12,
        fontWeight: 'bold'
    },

});

export default styles;
