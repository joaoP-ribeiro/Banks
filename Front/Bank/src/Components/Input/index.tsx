import {View, Text, TextInput} from "react-native"
import {useState} from "react"
import styles from "./style"

interface Props{
    title: string
    width: any
    marginTop: any
    size: number
    type: any
    limit: number
    passowrd: boolean

    onReturn : (valor: string) => void
}

export default function Input({title, width, marginTop, size, type, onReturn, limit, passowrd}:Props){
    const[value, setValue] = useState("")

    const writing = (writing: string) =>{
        setValue(writing)
        onReturn(writing)
    }


    const stileProps : Props ={
        title: title,
        width: width,
        marginTop: marginTop,
        size: size,
        type: type,
        limit: limit,
        passowrd: passowrd,

        onReturn: function (): void {
            throw new Error("Function not implemented.");
        }
    }

    const stylesP = styles(stileProps)


    return(
        <View style={stylesP.input}>
            <Text style={stylesP.text}>{title}</Text>
            <TextInput
                style={stylesP.inp}
                maxLength={limit}
                keyboardType={type}
                secureTextEntry={passowrd}
                value={value}
                onChangeText={writing}
            />
        </View>
    )
}