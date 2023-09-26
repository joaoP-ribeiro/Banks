import {View, Text} from "react-native"
import { TextInputMask } from 'react-native-masked-text'
import {useState} from "react"
import styles from "./style"

interface Props{
    title: string
    onReturn : (valor: string) => void
}

export default function DateInp({title, onReturn}:Props){
    const[value, setValue] = useState("")

    const writing = (writing: string) =>{
        setValue(writing)
        onReturn(writing)
    }

    return(
        <View style={styles.input}>
            <Text style={styles.text}>{title}</Text>
            <TextInputMask
                style={styles.inp}
                type={'datetime'}
                options={{
                    format: 'DD/MM/YYYY',
                }}
                value={value}
                onChangeText={writing}
            />
        </View>
    )
}