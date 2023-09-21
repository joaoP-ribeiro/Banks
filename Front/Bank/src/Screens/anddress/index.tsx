import {View, ScrollView} from "react-native"
import { useNavigation } from '@react-navigation/native';
import {useState} from "react"
import styles from "./style"
import Buttom from "../../Components/Buttom"
import Title from "../../Components/Title";
import Input from "../../Components/Input";


export default function Anddress(){
    const [value, setValue] = useState("")
    const navigation = useNavigation();

    const returnValue= (newValue: string) => {
        setValue(newValue)
    }

    const home = () =>{
        navigation.navigate('inicialPage')
    }

    return(
        <View style={styles.page}>
            <View style={styles.content}>
                <Title title='Bank' size={20} textColor='#FFFFFF' marginTop={'7%'}/>
            </View>
            <View style={styles.login}>
            <Title title='Anddress' size={30} textColor='#000' marginTop={'5%'}/>
                <ScrollView>
                    <Input title='CEP' marginTop={'7%'} width={'80%'} type={'numeric'} size={20} limit={14} passowrd={false} onReturn={returnValue}/>
                    <Input title='City' marginTop={'7%'} width={'80%'} type={'numeric'} size={20} limit={20} passowrd={true} onReturn={returnValue}/>
                    <Input title='Street' marginTop={'7%'} width={'80%'} type={'numeric'} size={20} limit={20} passowrd={true} onReturn={returnValue}/>
                    <Input title='Neighborhood' marginTop={'7%'} width={'80%'} type={'numeric'} size={20} limit={20} passowrd={true} onReturn={returnValue}/>
                    <Input title='UF' marginTop={'7%'} width={'15%'} type={'numeric'} size={20} limit={20} passowrd={true} onReturn={returnValue}/>
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