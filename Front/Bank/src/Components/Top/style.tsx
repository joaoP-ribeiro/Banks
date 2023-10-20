import { StyleSheet } from "react-native"

interface Props{
    title: string
    marginTop: any
}

const styles = ({marginTop}:Props) => {

    return StyleSheet.create({ 
        top:{
            marginTop: marginTop,
            width: '100%',
            flexDirection: 'row'
        },
        
        title:{
            width: '25%',
            justifyContent: 'center',
            alignItems: 'center'
        },
        
        text:{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000000'
        }
   })
}
export default styles

