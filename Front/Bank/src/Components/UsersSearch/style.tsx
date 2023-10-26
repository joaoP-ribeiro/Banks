import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    row: {
       marginTop: 20,
       width: '100%',
       height: 40,
       flexDirection: 'row',
       backgroundColor: '#E5E4E4',
       borderRadius: 32
    },


    container_name:{
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    space: {
        width: '20%'
    },


    text:{
        fontSize: 20,
        fontWeight: 'bold'
    },

    container_type:{
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },

    type: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#FF1577'
    },

});

export default styles;
