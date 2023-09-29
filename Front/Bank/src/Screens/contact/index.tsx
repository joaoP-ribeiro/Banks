import {View, ScrollView} from "react-native"
import { useNavigation } from '@react-navigation/native';
import {useState, useEffect} from "react"
import { useRoute } from '@react-navigation/native'
import styles from "./style"
import axios from "axios";
import Buttom from "../../Components/Buttom"
import Title from "../../Components/Title";
import Input from "../../Components/Input";
import Phone from "../../Components/Phone";
import { useContext } from 'react';
import  { AuthContext } from '../../context'

export default function Contact(){
    const authContext = useContext(AuthContext);
    const authToken = authContext.authToken;
    const authIdentificationNumber = authContext.valueIdentificationNumber

    const [valueEmail, setValueEmail] = useState("")
    const [valuePhone, setValuePhone] = useState("")
    const navigation = useNavigation();


    const contact = async () =>{
        const cleanedPhoneNumber = valuePhone.replace(/\(\d+\)/, '')

        let modifiedEmail = valueEmail.toLowerCase()

        if (!modifiedEmail.includes('@gmail.com')) {
            modifiedEmail += '@gmail.com'
        }

        try{
            const email = await axios.post('http://10.109.71.3:8000/bank/api/v1/query/email/', {
                email: modifiedEmail,
                client: authIdentificationNumber
            }, {
                headers: {
                    'Authorization': `Token ${authToken}`
                }
            });
            const phone = await axios.post('http://10.109.71.3:8000/bank/api/v1/query/phone/', {
                phone: cleanedPhoneNumber,
                prefix_number: valuePhone[1]+valuePhone[2],
                area_code: "55",
                client: authIdentificationNumber
            }, {
                headers: {
                    'Authorization': `Token ${authToken}`
                }
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
            <Title title='Contacts' size={30} textColor='#000' marginTop={'5%'}/>
                <ScrollView>
                    <Input title='Email' marginTop={'5%'} width={'80%'} type={'email-address'} size={20} limit={50} passowrd={false} onReturn={(newValue: string) => {
                        setValueEmail(newValue)
                    }}/>
                    <Phone title="Phone" onReturn={(newValue: string) => {
                        setValuePhone(newValue)
                    }}/>
                    <View style={styles.buttom}>
                        <View style={styles.bt}>
                            <Buttom title='' icon='arrow-forward-outline' size={40} color='#1FF2FF' textColor='#000' width={80} heigth={80} marginTop={240} border={90} just={'center'} aling={'center'} function={contact}/>
                        </View>
                    </View>
                </ScrollView> 
                
            </View>
        </View>
    )
}
