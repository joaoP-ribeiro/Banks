import {View, ScrollView} from "react-native"
import { useNavigation } from '@react-navigation/native';
import {useState} from "react"
import styles from "./style"
import Buttom from "../../Components/Buttom"
import Title from "../../Components/Title";
import Input from "../../Components/Input";


export default function TypeAccount(){
    const [value, setValue] = useState("")
    const [selectedButton, setSelectedButton] = useState('Normal')
    const navigation = useNavigation();

    const returnValue= (newValue: string) => {
        setValue(newValue)
    }

    const home = () =>{
        navigation.navigate('anddress')
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
                    <View>
                        <Input title='Name' marginTop={'7%'} width={'80%'} type={'default'} size={20} limit={14} passowrd={false} onReturn={returnValue}/>
                        <Input title='Birthdate' marginTop={'7%'} width={'80%'} type={'numeric'} size={20} limit={14} passowrd={false} onReturn={returnValue}/>
                        <Input title='CPF' marginTop={'7%'} width={'80%'} type={'numeric'} size={20} limit={14} passowrd={false} onReturn={returnValue}/>
                        <Input title='RG' marginTop={'7%'} width={'80%'} type={'numeric'} size={20} limit={14} passowrd={false} onReturn={returnValue}/>
                        <Input title='Email' marginTop={'7%'} width={'80%'} type={'email-address'} size={20} limit={14} passowrd={false} onReturn={returnValue}/>
                        <Input title='Phone' marginTop={'7%'} width={'80%'} type={'email-address'} size={20} limit={14} passowrd={false} onReturn={returnValue}/>
                    </View>  
                )}
                {selectedButton === 'Legal' && (
                    <View>
                        <Input title='Name' marginTop={'7%'} width={'80%'} type={'default'} size={20} limit={14} passowrd={false} onReturn={returnValue}/>
                        <Input title='Establishment Date:' marginTop={'7%'} width={'80%'} type={'numeric'} size={20} limit={14} passowrd={false} onReturn={returnValue}/>
                        <Input title='CNPJ' marginTop={'7%'} width={'80%'} type={'numeric'} size={20} limit={14} passowrd={false} onReturn={returnValue}/>
                        <Input title='IM' marginTop={'7%'} width={'80%'} type={'numeric'} size={20} limit={14} passowrd={false} onReturn={returnValue}/>
                        <Input title='IE' marginTop={'7%'} width={'80%'} type={'numeric'} size={20} limit={14} passowrd={false} onReturn={returnValue}/>
                        <Input title='Legal Nature' marginTop={'7%'} width={'80%'} type={'email-address'} size={20} limit={14} passowrd={false} onReturn={returnValue}/>
                        <Input title='Email' marginTop={'7%'} width={'80%'} type={'email-address'} size={20} limit={14} passowrd={false} onReturn={returnValue}/>
                        <Input title='Phone' marginTop={'7%'} width={'80%'} type={'email-address'} size={20} limit={14} passowrd={false} onReturn={returnValue}/>
                    </View>  
                )} 
                <View style={styles.buttom}>
                    <View style={styles.bt}>
                         <Buttom title='' icon='arrow-forward-outline' size={40} color='#1FF2FF' textColor='#000' width={80} heigth={80} marginTop={0} border={32} just={'center'} aling={'center'} function={home}/>
                    </View>
                </View>
                </ScrollView> 
                
            </View>
        </View>
    )
}
