import {View, ScrollView} from "react-native"
import { useNavigation } from '@react-navigation/native';
import {useState} from "react"
import styles from "./style"
import Buttom from "../../Components/Buttom"
import Title from "../../Components/Title";
import Input from "../../Components/Input";


export default function CreateAccount(){
    const [value, setValue] = useState("")
    const navigation = useNavigation();

    const returnValue= (newValue: string) => {
        setValue(newValue)
    }

    const TypeAccount = () =>{
        navigation.navigate('typeAccount')
    }

    return(
        <View style={styles.page}>
            <View style={styles.content}>
                <Title title='Bank' size={20} textColor='#FFFFFF' marginTop={'7%'}/>
            </View>
            <View style={styles.login}>
            <Title title='Create Account' size={30} textColor='#000' marginTop={'5%'}/>
                <ScrollView>   
                    <Input title='Passoword' marginTop={'7%'} width={'80%'} type={'numeric'} size={20} limit={14} passowrd={true} onReturn={returnValue}/>
                    <Input title='Confirm Passoword' marginTop={'7%'} width={'80%'} type={'numeric'} size={20} limit={20} passowrd={true} onReturn={returnValue}/>
                </ScrollView> 
                <View style={styles.buttom}>
                    <View style={styles.bt}>
                         <Buttom title='' icon='arrow-forward-outline' size={40} color='#1FF2FF' textColor='#000' width={80} heigth={80} marginTop={0} border={32} just={'center'} aling={'center'} function={TypeAccount}/>
                    </View>
                </View>
            </View>
        </View>
    )
}