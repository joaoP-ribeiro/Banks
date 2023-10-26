import {View, ScrollView, Alert} from "react-native"
import { useNavigation } from '@react-navigation/native';
import {useState, useEffect} from "react"
import { useRoute } from '@react-navigation/native'
import styles from "./style"
import axios from "axios"
import * as yup from 'yup'
import Buttom from "../../Components/Buttom"
import Title from "../../Components/Title";
import Input from "../../Components/Input";
import Phone from "../../Components/Phone";
import DateInp from "../../Components/Date";
import axiosInstance from "../../service/api";
import { useContext } from 'react';
import { AuthContext } from "../../context";

export default function NormalAccount(){
    const authContext = useContext(AuthContext)
    const authToken = authContext.authToken
    const authIdentificationNumber = authContext.valueIdentificationNumber

    const [valueBirthdate, setValueBirthdate] = useState("")
    const [valueRG, setValueRG] = useState("")
    const [valueName, setValueName] = useState("")
    const navigation = useNavigation();

    const schema = yup.object().shape({
        name: yup.string().required('O nome é obrigatório'),
        birthdate: yup.string().required('A data de nascimento é obrigatória'),
        rg: yup.string().required('A RG é obrigatória'),
    });

    const naturalPerson = async () =>{
        try{

            await schema.validate({ name: valueName, birthdate: valueBirthdate, rg: valueRG}, { abortEarly: false })
            
            const naturalCreate = await axiosInstance.post('/bank/api/v1/query/natural/person/', {
                name: valueName,
                birthdate: valueBirthdate,
                cpf: "",
                rg: valueRG,
                client: authIdentificationNumber
            }, {
                headers: {
                    'Authorization': `Token ${authToken}`
                }
            });


            navigation.navigate('contact')
        }
        catch(error) {
           Alert.alert('Error', String(error))
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
                    <Input title='Name' marginTop={'5%'} width={'80%'} type={'default'} size={20} limit={14} passowrd={false} onReturn={(newValue: string) => {
                        setValueName(newValue)
                    }}/>
                    <DateInp title='Birthdate' onReturn={(newValue: string) => {
                        setValueBirthdate(newValue)
                    }}/>
                    <Input title='RG' marginTop={'5%'} width={'80%'} type={'numeric'} size={20} limit={9} passowrd={false} onReturn={(newValue: string) => {
                        setValueRG(newValue)
                    }}/>
                    <View style={styles.buttom}>
                        <View style={styles.bt}>
                            <Buttom title='' icon='arrow-forward-outline' size={40} color='#1FF2FF' textColor='#000' width={80} heigth={80} marginTop={140} border={90} just={'center'} aling={'center'} function={naturalPerson} padding={''}/>
                        </View>
                    </View>
                </ScrollView> 
            </View>
        </View>
    )
}
