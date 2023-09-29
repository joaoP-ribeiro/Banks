import {View, ScrollView} from "react-native"
import { useNavigation } from '@react-navigation/native';
import {useState} from "react"
import axios from "axios";
import styles from "./style"
import Buttom from "../../Components/Buttom"
import Title from "../../Components/Title";
import Input from "../../Components/Input";
import { useContext } from 'react';
import { AuthContext } from "../../context";


export default function CreateAccount(){
    const authContext = useContext(AuthContext);

    const [valuePass, setValuePass] = useState("")
    const [valuePassConf, setValuePassConf] = useState("")
    const [valueIdentificationNumber, setvalueIdentificationNumber] = useState("")
    const [selectedButton, setSelectedButton] = useState('Normal')
    const navigation = useNavigation();

    const TypeAccount = async () =>{
        if(valuePass === valuePassConf){
            try{
                
                const create = await axios.post('http://10.109.71.3:8000/bank/api/v1/auth/users/', {
                    identification_number: valueIdentificationNumber,
                    password: valuePass,
                })

                try {
                    const login = await axios.post('http://10.109.71.3:8000/bank/api/v1/auth/token/login/', {
                        identification_number: valueIdentificationNumber,
                        password: valuePass,
                    });
    
                    const token = login.data.auth_token;
                    authContext.setAuthToken(token);
                    authContext.setValueIdentificationNumber(valueIdentificationNumber)

                    if(selectedButton === 'Normal'){
                        navigation.navigate('normalAccount')   
                    }
                    else{
                        navigation.navigate('legalAccount')
                    }
                    
                } catch (error) {
                    console.error(error);
                }   
            }
            catch(error) {
                console.error(error);
            }
        }
       
    }

    return(
        <View style={styles.page}>
            <View style={styles.content}>
                <Title title='Bank' size={20} textColor='#FFFFFF' marginTop={'7%'}/>
            </View>
            <View style={styles.login}>
            <Title title='Type Account' size={30} textColor='#000' marginTop={'5%'}/>
            <View style={styles.navButtons}>
                <View style={styles.navB}>
                    <Buttom title='Normal' icon='' size={20} color={selectedButton === 'Normal' ? '#FFBD15' : '#EBEBEB'} textColor='#000' width={125} heigth={40} marginTop={0} border={32} just={'center'} aling={'center'} function={() => {
                setSelectedButton('Normal')}}/>
                </View>
                <View style={styles.navB}>
                    <Buttom title='Legal' icon='' size={20} color={selectedButton === 'Legal' ? '#FFBD15' : '#EBEBEB'} textColor='#000' width={125} heigth={40} marginTop={0} border={32} just={'center'} aling={'center'} function={() => {
                setSelectedButton('Legal')}}/>
                </View>
            </View>
                <ScrollView>
                    {selectedButton === 'Normal' && (
                        <Input title='CPF' marginTop={'5%'} width={'80%'} type={'numeric'} size={20} limit={11} passowrd={false} onReturn={(newValue: string) => {
                        setvalueIdentificationNumber(newValue)}}/>
                    )}
                    {selectedButton === 'Legal' && (
                        <Input title='CNPJ' marginTop={'5%'} width={'80%'} type={'numeric'} size={20} limit={14} passowrd={true} onReturn={(newValue: string) => {
                        setvalueIdentificationNumber(newValue)}}/>
                    )} 
                    <Input title='Passoword' marginTop={'5%'} width={'80%'} type={'default'} size={20} limit={14} passowrd={true} onReturn={(newValue: string) => {
                    setValuePass(newValue)}}/>
                    <Input title='Confirm Passoword' marginTop={'7%'} width={'80%'} type={'default'} size={20} limit={20} passowrd={true} onReturn={(newValue: string) => {
                    setValuePassConf(newValue)}}/>
                 
                    <View style={styles.buttom}>
                        <View style={styles.bt}>
                            <Buttom title='' icon='arrow-forward-outline' size={40} color='#1FF2FF' textColor='#000' width={80} heigth={80} marginTop={80} border={90} just={'center'} aling={'center'} function={TypeAccount}/>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}