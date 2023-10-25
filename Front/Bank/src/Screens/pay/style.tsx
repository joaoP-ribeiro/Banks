import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    page:{
        flex: 1,
        backgroundColor: '#000'
    },

    content: {
        flex: 1,
    },

    loading:{
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center'
    },

    scrol:{
        flex: 1,
        width: '100%',
    },

    main:{
        height: '74%',
        backgroundColor: '#F4F4F4',
        borderTopRightRadius: 60,
        borderTopLeftRadius: 60, 
    },

    buttons:{
        flex:1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
   
})
export default styles