import { StyleSheet } from "react-native"

interface Props{
    title: string
    width: any
    marginTop: any
    size: number
    type: any
    limit: number
}

const styles = ({width, marginTop, size}:Props) => {

    return StyleSheet.create({ 
        input:{
            marginTop: marginTop,
            width: '100%',
            height: 100,
            padding: 15
        },

        text:{
            fontSize: size,
            fontWeight: 'bold',
            color: '#000'
        },

        inp:{
            height: 45,
            width: '100%',
            backgroundColor: '#E4E4E4',
            borderRadius: 32,
            textAlign: 'center',
            fontSize: 20, 
            fontWeight: 'bold'
        }
   })
}
export default styles