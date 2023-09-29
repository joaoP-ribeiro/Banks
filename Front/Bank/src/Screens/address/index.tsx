import {View, ScrollView} from "react-native"
import { useNavigation } from '@react-navigation/native';
import {useState} from "react"
import styles from "./style"
import Buttom from "../../Components/Buttom"
import Title from "../../Components/Title";
import Input from "../../Components/Input";
import axios from "axios";
import { useContext } from 'react';
import  { AuthContext } from '../../context'


export default function Address(){
    const authContext = useContext(AuthContext);
    const authToken = authContext.authToken;
    const authIdentificationNumber = authContext.valueIdentificationNumber

    const [valueCEP, setValueCEP] = useState("")
    const [valueCity, setValueCity] = useState("")
    const [valueStreet, setValueStreet] = useState("")
    const [valueNeighborhood, setValueNeighborhood] = useState("")
    const [valueUF, setValueUF] = useState("")
    const navigation = useNavigation();
    
    const address = async () =>{
        try{
            const address = await axios.post('http://10.109.71.3:8000/bank/api/v1/query/address/', {
                cep: valueCEP,
                city: valueCity,
                street: valueStreet,
                neighborhood: valueNeighborhood,
                uf: valueUF,
                client: authIdentificationNumber
            }, {
                headers: {
                    'Authorization': `Token ${authToken}`
                }
            });
            navigation.navigate('inicialPage')
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
            <Title title='Anddress' size={30} textColor='#000' marginTop={'5%'}/>
                <ScrollView>
                    <Input title='CEP' marginTop={'7%'} width={'80%'} type={'numeric'} size={20} limit={14} passowrd={false} onReturn={(newValue: string) => {
                        setValueCEP(newValue)
                    }}/>
                    <Input title='City' marginTop={'7%'} width={'80%'} type={'default'} size={20} limit={20} passowrd={false} onReturn={(newValue: string) => {
                        setValueCity(newValue)
                    }}/>
                    <Input title='Street' marginTop={'7%'} width={'80%'} type={'default'} size={20} limit={20} passowrd={false} onReturn={(newValue: string) => {
                        setValueStreet(newValue)
                    }}/>
                    <Input title='Neighborhood' marginTop={'7%'} width={'80%'} type={'default'} size={20} limit={20} passowrd={false} onReturn={(newValue: string) => {
                        setValueNeighborhood(newValue)
                    }}/>
                    <Input title='UF' marginTop={'7%'} width={'15%'} type={'defaultCampinas'} size={20} limit={20} passowrd={false} onReturn={(newValue: string) => {
                        setValueUF(newValue)
                    }}/>
                    <View style={styles.buttom}>
                        <View style={styles.bt}>
                            <Buttom title='' icon='arrow-forward-outline' size={40} color='#1FF2FF' textColor='#000' width={80} heigth={80} marginTop={0} border={90} just={'center'} aling={'center'} function={address}/>
                        </View>
                    </View>
                </ScrollView> 
            </View>
        </View>
    )
}