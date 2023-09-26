import {View, ScrollView} from "react-native"
import { useNavigation } from '@react-navigation/native';
import {useState} from "react"
import { useRoute } from '@react-navigation/native';
import styles from "./style"
import Buttom from "../../Components/Buttom"
import Title from "../../Components/Title";
import Input from "../../Components/Input";


export default function LegalAccount(){
    const route = useRoute();
    const { valueIdentificationNumber } = route.params as { valueIdentificationNumber: string }

    const [value, setValue] = useState("")
    const navigation = useNavigation();

    const returnValue= (newValue: string) => {
        setValue(newValue)
    }

    const address = () =>{
        navigation.navigate('address')
    }


    return(
        <View style={styles.page}>
            <View style={styles.content}>
                <Title title='Bank' size={20} textColor='#FFFFFF' marginTop={'7%'}/>
            </View>
            <View style={styles.login}>
            <Title title='Legal Account' size={30} textColor='#000' marginTop={'5%'}/>
                <ScrollView>
                    <Input title='Name' marginTop={'5%'} width={'80%'} type={'default'} size={20} limit={14} passowrd={false} onReturn={returnValue}/>
                    <Input title='Establishment Date:' marginTop={'5%'} width={'80%'} type={'numeric'} size={20} limit={14} passowrd={false} onReturn={returnValue}/>
                    <Input title='CNPJ' marginTop={'5%'} width={'80%'} type={'numeric'} size={20} limit={14} passowrd={false} onReturn={returnValue}/>
                    <Input title='IM' marginTop={'5%'} width={'80%'} type={'numeric'} size={20} limit={14} passowrd={false} onReturn={returnValue}/>
                    <Input title='IE' marginTop={'5%'} width={'80%'} type={'numeric'} size={20} limit={14} passowrd={false} onReturn={returnValue}/>
                    <Input title='Legal Nature' marginTop={'5%'} width={'80%'} type={'email-address'} size={20} limit={14} passowrd={false} onReturn={returnValue}/>
                    <Input title='Email' marginTop={'5%'} width={'80%'} type={'email-address'} size={20} limit={14} passowrd={false} onReturn={returnValue}/>
                    <Input title='Phone' marginTop={'5%'} width={'80%'} type={'email-address'} size={20} limit={14} passowrd={false} onReturn={returnValue}/>
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

{/*<View>
        <Input title='Name' marginTop={'7%'} width={'80%'} type={'default'} size={20} limit={14} passowrd={false} onReturn={returnValue}/>
        <Input title='Birthdate' marginTop={'7%'} width={'80%'} type={'numeric'} size={20} limit={14} passowrd={false} onReturn={returnValue}/>
        <Input title='CPF' marginTop={'7%'} width={'80%'} type={'numeric'} size={20} limit={14} passowrd={false} onReturn={returnValue}/>
        <Input title='RG' marginTop={'7%'} width={'80%'} type={'numeric'} size={20} limit={14} passowrd={false} onReturn={returnValue}/>
        <Input title='Email' marginTop={'7%'} width={'80%'} type={'email-address'} size={20} limit={14} passowrd={false} onReturn={returnValue}/>
        <Input title='Phone' marginTop={'7%'} width={'80%'} type={'email-address'} size={20} limit={14} passowrd={false} onReturn={returnValue}/>
    </View> */}

{/*<View>
        <Input title='Name' marginTop={'7%'} width={'80%'} type={'default'} size={20} limit={14} passowrd={false} onReturn={returnValue}/>
        <Input title='Establishment Date:' marginTop={'7%'} width={'80%'} type={'numeric'} size={20} limit={14} passowrd={false} onReturn={returnValue}/>
        <Input title='CNPJ' marginTop={'7%'} width={'80%'} type={'numeric'} size={20} limit={14} passowrd={false} onReturn={returnValue}/>
        <Input title='IM' marginTop={'7%'} width={'80%'} type={'numeric'} size={20} limit={14} passowrd={false} onReturn={returnValue}/>
        <Input title='IE' marginTop={'7%'} width={'80%'} type={'numeric'} size={20} limit={14} passowrd={false} onReturn={returnValue}/>
        <Input title='Legal Nature' marginTop={'7%'} width={'80%'} type={'email-address'} size={20} limit={14} passowrd={false} onReturn={returnValue}/>
        <Input title='Email' marginTop={'7%'} width={'80%'} type={'email-address'} size={20} limit={14} passowrd={false} onReturn={returnValue}/>
        <Input title='Phone' marginTop={'7%'} width={'80%'} type={'email-address'} size={20} limit={14} passowrd={false} onReturn={returnValue}/>
    </View>  */}
