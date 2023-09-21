import {View, Text} from "react-native"
import styles from "./style"

interface Props{
    title: string
    size: any
    textColor: string
    marginTop: any
}

export default function Title({title, size, textColor, marginTop}:Props){
    const stileProps : Props ={
        title: title,
        size: size,
        textColor: textColor,
        marginTop: marginTop
    }

    const stylesP = styles(stileProps)


    return(
        <View style={stylesP.title}>
            <Text style={stylesP.text}>{title}</Text>
        </View>
    )
}