import {View, ScrollView, Alert} from "react-native"
import Title from "../../Components/Title"
import styles from "./style"
import Headerr from "../../Components/Header"



export default function Home(){
    return(
        <View style={styles.page}>
            <View style={styles.content}>
                <Title title='Bank' size={20} textColor='#FFFFFF' marginTop={'7%'}/>
            </View>
            <Headerr name="João Pedro" photo="J"/>
            <View style={styles.main}></View>
        </View>
    )
}