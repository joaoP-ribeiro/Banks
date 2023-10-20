import {View, Text} from "react-native"
import styles from "./style"

interface Props{
    title: string,
    marginTop: any
}

export default function Top({title, marginTop}:Props){
    const stileProps : Props ={
        title: title,
        marginTop: marginTop
    }

    const stylesP = styles(stileProps)
    return(
        <View style={stylesP.top}>
            <View style={stylesP.title}>
                <Text style={stylesP.text}>{title}</Text>
            </View>
        </View>
    )
}