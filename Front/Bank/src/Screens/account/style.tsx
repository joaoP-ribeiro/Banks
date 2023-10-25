import { StyleSheet } from "react-native"

const styles = StyleSheet.create({   
    page:{
        flex: 1,
        backgroundColor: '#000'
    },

    content: {
        flex: 1,
      },

    login:{
        height: '83%',
        backgroundColor: '#F4F4F4',
        borderTopRightRadius: 60,
        borderTopLeftRadius: 60,
        
    },
    navButtons:{
        height: '70%',
        padding: 15,
        width: '100%',
        flexDirection: "row",
        
    },

    navB:{
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center'

    },

    pdButtom:{
        padding: 15
    },

    buttom:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    },

    bt:{
        marginLeft: '70%'
    },

   })
export default styles