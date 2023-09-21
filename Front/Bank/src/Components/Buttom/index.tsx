import {View, Text, Pressable} from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "./style"

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

    function: () => void
}


export default function Buttom({title, icon, size, textColor, color, width, heigth, marginTop, border, just, aling, ...rest}:Props){
    
    const stileProps : Props ={
        textColor: textColor,
        color: color,
        size: size,
        width: width,
        heigth: heigth,
        marginTop: marginTop,
        border: border,
        just: just,
        aling: aling,
        title: "" ,
        icon: "",
        function: function (): void {
            throw new Error("Function not implemented.");
        }
    }

    const stylesP = styles(stileProps)



    return(
        <Pressable 
            {...rest}
            onPress={rest.function}
            style={stylesP.buttom}
        >
            {icon === "" ? (
                <Text style={stylesP.text}>{title}</Text>
            ) : (
                <Ionicons name={icon} size={size} color={textColor} />
            )}
        </Pressable>
    )
}