import {View, ScrollView, Alert} from "react-native"
import { useNavigation } from '@react-navigation/native';
import {useState} from "react"
import styles from "./style"
import * as yup from 'yup'
import Buttom from "../../Components/Buttom"
import Title from "../../Components/Title";
import Input from "../../Components/Input";
import axios from "axios";
import { useContext } from 'react';
import  { AuthContext } from '../../context'


export default function Account(){
    const authContext = useContext(AuthContext)
    const authToken = authContext.authToken;
    const authIdentificationNumber = authContext.valueIdentificationNumber
    const navigation = useNavigation()
    const [selectedButton, setSelectedButton] = useState('Current')
    
    const createAccount = async () =>{
        
        try{
            const account = await axios.post('http://10.109.71.7:8000/bank/api/v1/query/view/account/', {
                typee: selectedButton,
                status: 'true',
                client: authIdentificationNumber
            }, {
                headers: {
                    'Authorization': `Token ${authToken}`
                }
            });
            const response = account.data
            const accountNumber = response['number']
            try{
                const card = await axios.post('http://10.109.71.7:8000/bank/api/v1/query/card/', {
                status: 'true',
                account: accountNumber
                }, {
                    headers: {
                        'Authorization': `Token ${authToken}`
                    }
                });
                const response = card.data
                navigation.navigate('home')
            }
            catch(error){
                Alert.alert('Error', String(error))
            }
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
            <Title title='Type Account' size={30} textColor='#000' marginTop={'5%'}/>
                <View style={styles.navButtons}>
                    <View style={styles.navB}>
                        <Buttom title='Current' icon='' padding={''} size={20} color={selectedButton === 'Current' ? '#FFBD15' : '#EBEBEB'} textColor='#000' width={125} heigth={40} marginTop={0} border={32} just={'center'} aling={'center'} function={() => {
                    setSelectedButton('Current')}}/>
                    </View>
                    <View style={styles.navB}>
                        <Buttom title='Savings ' icon='' padding={''} size={20} color={selectedButton === 'Savings' ? '#FFBD15' : '#EBEBEB'} textColor='#000' width={125} heigth={40} marginTop={0} border={32} just={'center'} aling={'center'} function={() => {
                    setSelectedButton('Savings')}}/>
                    </View>
                </View>
                <View style={styles.buttom}>
                    <View style={styles.bt}>
                        <Buttom title='' icon='arrow-forward-outline' padding={''} size={40} color='#1FF2FF' textColor='#000' width={80} heigth={80} marginTop={0} border={90} just={'center'} aling={'center'} function={createAccount}/>
                    </View>
                </View> 
            </View>
        </View>
    )
}