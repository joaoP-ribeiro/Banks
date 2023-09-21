import { StyleSheet } from "react-native"

interface Props{
    title: string
    size: any
    textColor: string
    marginTop: any
}

const styles = ({size, textColor, marginTop}:Props) => {

    return StyleSheet.create({ 
        title:{
            marginTop: marginTop,
            width: '100%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center'
        },

        text:{
            fontSize: size,
            fontWeight: 'bold',
            color: textColor
        }
   })
}
export default styles