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

    main:{
        height: '87%',
        backgroundColor: '#F4F4F4',
        borderTopRightRadius: 60,
        borderTopLeftRadius: 60,
        
    },

    container_select:{
        marginTop: '5%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    select:{
        backgroundColor: '#1FF2FF',
        borderRadius: 32
    },
   
})
export default styles