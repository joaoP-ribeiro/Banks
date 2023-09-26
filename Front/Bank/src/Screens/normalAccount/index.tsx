import {View, ScrollView} from "react-native"
import { useNavigation } from '@react-navigation/native';
import {useState} from "react"
import { useRoute } from '@react-navigation/native'
import styles from "./style"
import axios from "axios";
import Buttom from "../../Components/Buttom"
import Title from "../../Components/Title";
import Input from "../../Components/Input";
import Phone from "../../Components/Phone";
import DateInp from "../../Components/Date";

export default function NormalAccount(){
    const route = useRoute();
    const { valueIdentificationNumber } = route.params as { valueIdentificationNumber: string }
    const { token } = route.params as { token: string }
    const [valueBirthdate, setValueBirthdate] = useState("")
    const [valueCPF, setValueCPF] = useState("")
    const [valueRG, setValueRG] = useState("")
    const [valueEmail, setValueEmail] = useState("")
    const [valuePhone, setValuePhone] = useState("")
    const [valueName, setValueName] = useState("")
    const navigation = useNavigation();


    const address = async () =>{
        try{
                
            const create = await axios.post('http://10.109.71.3:8000/bank/api/v1/query/natural/person/', {
                headers: {
                    'Authorization': `Token ${token}`,
                },
                name: valueName,
                birthdate: valueBirthdate,
                cpf: valueCPF,
                rg: valueRG,
                client: valueIdentificationNumber
            })

            navigation.navigate('address')
        }
        catch(error) {
            console.error(error);
        }
        
        
    }


    return(
        <View style={styles.page}>
            <View style={styles.content}>
                <Title title='Bank' size={20} textColor='#FFFFFF' marginTop={'7%'}/>
            </View>
            <View style={styles.login}>
            <Title title='Normal Account' size={30} textColor='#000' marginTop={'5%'}/>
                <ScrollView>
                    <Input title={token} marginTop={'5%'} width={'80%'} type={'default'} size={20} limit={14} passowrd={false} onReturn={(newValue: string) => {
                        setValueName(newValue)
                    }}/>
                    <DateInp title='Birthdate' onReturn={(newValue: string) => {
                        setValueBirthdate(newValue)
                    }}/>
                    <Input title='CPF' marginTop={'5%'} width={'80%'} type={'numeric'} size={20} limit={14} passowrd={false} onReturn={(newValue: string) => {
                        setValueCPF(newValue)
                    }}/>
                    <Input title='RG' marginTop={'5%'} width={'80%'} type={'numeric'} size={20} limit={14} passowrd={false} onReturn={(newValue: string) => {
                        setValueRG(newValue)
                    }}/>
                    <Input title='Email' marginTop={'5%'} width={'80%'} type={'email-address'} size={20} limit={14} passowrd={false} onReturn={(newValue: string) => {
                        setValueEmail(newValue)
                    }}/>
                    <Phone title="Phone" onReturn={(newValue: string) => {
                        setValuePhone(newValue)
                    }}/>
                    <View style={styles.buttom}>
                        <View style={styles.bt}>
                            <Buttom title='' icon='arrow-forward-outline' size={40} color='#1FF2FF' textColor='#000' width={80} heigth={80} marginTop={30} border={90} just={'center'} aling={'center'} function={address}/>
                        </View>
                    </View>
                </ScrollView> 
                
            </View>
        </View>
    )
}
