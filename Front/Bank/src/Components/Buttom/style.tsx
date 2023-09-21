import { StyleSheet } from "react-native"

interface Props{
    title: string
    icon: string
    size: number
    textColor: string
    color: string
    width: any
    heigth: any
    marginTop: any
    border: number
    just: any
    aling: any
}

const styles = ({size, textColor, color, width, heigth, marginTop, border, just, aling}:Props) => {

return StyleSheet.create({
    buttom:{
        marginTop: marginTop,
        height: heigth,
        width: width,
        backgroundColor: color,
        borderRadius: border, 
        justifyContent: just,
        alignItems: aling
    },

    text:{
        fontSize: size,
        color: textColor
    }

})   
}  
export default styles