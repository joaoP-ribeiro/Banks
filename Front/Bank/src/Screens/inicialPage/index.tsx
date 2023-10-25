import {View} from "react-native"
import { useNavigation } from '@react-navigation/native';
import styles from "./style"
import Buttom from "../../Components/Buttom"
import Title from "../../Components/Title";


export default function InicialPage(){
    const navigation = useNavigation();

    const Login = () =>{
        navigation.navigate('login')
    }

    return(
        <View style={styles.page}>
            <View style={styles.content}>
                <Title title='Bank' size={20} textColor='#FFFFFF' marginTop={'7%'}/>
            </View>
            <View style={styles.purple}>
                <View style={styles.content}></View>
                <View style={styles.pink}>
                    <View style={styles.buttom}>
                        <View style={styles.content}></View>
                        <View style={styles.bt}>
                            <Buttom title='Start' icon='' size={25} color='transparent' textColor='#FFFFFF' width={70} heigth={50} marginTop={0} border={0} just={''} aling={''} function={Login} padding={''}/>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}