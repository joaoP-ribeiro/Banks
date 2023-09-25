import {View, ScrollView} from "react-native"
import { useNavigation } from '@react-navigation/native';
import {useState} from "react"
import axios from 'axios'
import styles from "./style"
import Buttom from "../../Components/Buttom"
import Title from "../../Components/Title";
import Input from "../../Components/Input";


export default function Login(){
    const [valueNumber, setValueNumber] = useState("")
    const [valuePass, setValuePass] = useState("")
    const navigation = useNavigation();

    const home = async () =>{
        try{
            const loginUrl = await axios.post("http://10.109.71.3:8000/bank/api/v1/auth/token/login/", {
                identification_number: valueNumber,
                password: valuePass,
            })

            const token = loginUrl.data.auth_token
            console.log(token)

            navigation.navigate('inicialPage')
        }
        catch(error) {
            console.error(error);
        }
       
    }

    const createAccount = () =>{
        navigation.navigate('createAccount')
    }


    return(
        <View style={styles.page}>
            <View style={styles.content}>
                <Title title='Bank' size={20} textColor='#FFFFFF' marginTop={'7%'}/>
            </View>
            <View style={styles.login}>
            <Title title='Login' size={30} textColor='#000' marginTop={'5%'}/>
                <ScrollView>
                    <Input title={'Number'} marginTop={'7%'} width={'80%'} type={'numeric'} size={20} limit={14} passowrd={false} onReturn={(newValue: string) => {
                    setValueNumber(newValue)}}/>
                    <Input title='Passoword' marginTop={'7%'} width={'80%'} type={'default'} size={20} limit={20} passowrd={true} onReturn={(newValue: string) => {
                    setValuePass(newValue)}}/>
                    <View style={styles.pdButtom}>
                        <Buttom title='Forgot my password' icon='' size={20} color='transparent' textColor='#AFAFAF' width={'100%'} heigth={30} marginTop={"5%"} border={0} just={''} aling={''} function={home}/>
                        <Buttom title='Create account' icon='' size={20} color='transparent' textColor='#AFAFAF' width={'100%'} heigth={30} marginTop={"5%"} border={0} just={''} aling={''} function={createAccount}/>
                    </View>
                    <View style={styles.buttom}>
                        <View style={styles.bt}>
                            <Buttom title='' icon='arrow-forward-outline' size={40} color='#1FF2FF' textColor='#000' width={80} heigth={80} marginTop={140} border={90} just={'center'} aling={'center'} function={home}/>
                        </View>
                    </View>
                </ScrollView> 
            </View>
        </View>
    )
}