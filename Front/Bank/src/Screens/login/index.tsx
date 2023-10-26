import {View, ScrollView, Alert} from "react-native"
import { useNavigation } from '@react-navigation/native';
import {useState} from "react"
import * as yup from 'yup'
import styles from "./style"
import Buttom from "../../Components/Buttom"
import Title from "../../Components/Title";
import Input from "../../Components/Input";
import axiosInstance from "../../service/api";
import { useContext } from 'react';
import { AuthContext } from "../../context";


export default function Login(){
    const authContext = useContext(AuthContext);
    const [valueNumber, setValueNumber] = useState("")
    const [valuePass, setValuePass] = useState("")
    const navigation = useNavigation();

    const schema = yup.object().shape({
        number: yup.string().required('O número é obrigatório'),
        password: yup.string().required('A senha é obrigatória'),
    });


    const home = async () =>{
        try{
            await schema.validate({ number: valueNumber, password: valuePass }, { abortEarly: false });
            
            const loginUrl = await axiosInstance.post('/bank/api/v1/auth/token/login/', {
                identification_number: valueNumber,
                password: valuePass,
            })

            const token = loginUrl.data.auth_token
            authContext.setAuthToken(token);
            authContext.setValueIdentificationNumber(valueNumber)

            navigation.navigate('home')
        }
        catch(error) {
            Alert.alert('Erro', String(error))
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
                        <Buttom title='Forgot my password' icon='' size={20} color='transparent' textColor='#AFAFAF' width={'100%'} heigth={30} marginTop={"5%"} border={0} just={''} aling={''} function={home} padding={''}/>
                        <Buttom title='Create account' icon='' size={20} color='transparent' textColor='#AFAFAF' width={'100%'} heigth={30} marginTop={"5%"} border={0} just={''} aling={''} function={createAccount} padding={''}/>
                    </View>
                    <View style={styles.buttom}>
                        <View style={styles.bt}>
                            <Buttom title='' icon='arrow-forward-outline' size={40} color='#1FF2FF' textColor='#000' width={80} heigth={80} marginTop={140} border={90} just={'center'} aling={'center'} function={home} padding={''}/>
                        </View>
                    </View>
                </ScrollView> 
            </View>
        </View>
    )
}