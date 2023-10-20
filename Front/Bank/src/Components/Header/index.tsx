import {View, Text} from "react-native"
import FeatherIcon from 'react-native-vector-icons/Feather'
import styles from "./style"

interface Props{
    name: string | null
    photo: string | null
    
}

export default function Headerr({name, photo}:Props){

    return(
        <View style={styles.header}>
            <View style={styles.column1}>
                <FeatherIcon name={'user'} size={30} color={'#FFF'}/>
            </View>
            <View style={styles.column2}>
                {name !== null?
                    <Text style={styles.text}>{name.length > 12 ? `${name.slice(0, 12)}...` : name}</Text>
                :
                    <Text style={styles.text}>NOT NAME</Text>
                }
            </View>
            <View style={styles.column3}>
                {photo && photo.length === 1 ? 
                    <View style={styles.contFistLetter}>
                        <Text style={styles.text}>{photo}</Text>
                    </View>
                : 
                    <View style={styles.contFistLetter}>
                        <Text style={styles.text}>!</Text>
                    </View>}
            </View>
        </View>
    )
}