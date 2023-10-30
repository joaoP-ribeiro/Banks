import { useState, useContext } from "react";
import { View, Alert } from "react-native";
import Title from "../../Components/Title";
import styles from "./style";
import Top from "../../Components/Top";
import Input from "../../Components/Input"
import * as yup from 'yup'
import Balance from "../../Components/Balance";
import { useRoute } from "@react-navigation/native";
import { AuthContext } from "../../context";
import axiosInstance from "../../service/api";
import Buttom from "../../Components/Buttom";
import Perfil from "../../Components/Perfil";

interface Props{
  account: number
  name: string
}

export default function PixPay() {
  const authContext = useContext(AuthContext)
  const authToken = authContext.authToken
  const authAccount = authContext.account
  const authBalance = authContext.balance
  const route = useRoute()
  const { account, name } = route.params as Props

  const [valuePix, setValuePix] = useState('')

  const schema = yup.object().shape({
    value: yup.string().required('Coloeque um valor'),
  });

  const pay = async () =>{
    await schema.validate({ value: valuePix}, { abortEarly: false });
    const valueNumber = parseFloat(valuePix)
    setValuePix('')
    if(authBalance !== null && valueNumber > authBalance){
      Alert.alert('Value', 'insufficient balance')
    }
    else{
      
      try{
        
        const pix = await axiosInstance.post('/bank/api/v1/query/transaction/', {
            account: authAccount,
            receive_account: account,
            value: valueNumber
          }, {
            headers: {
                'Authorization': `Token ${authToken}`
            }
        }
        
        )
        
        }
        catch(error) {setValuePix('')
        }
    }
  }

  return (
    <View style={styles.page}>
      <View style={styles.content}>
          <Title title="Bank" size={20} textColor="#FFFFFF" marginTop={'7%'} />
      </View>
      <View style={styles.main}>
        <Title title={name} size={20} textColor="#000" marginTop={'0%'} />
        <Top title='Your Balance' marginTop={'0%'} />
        <Balance textColor='#7200E3'/>
        <Input title='Value' marginTop={'7%'} width={'80%'} type={'numeric'} size={20} limit={14} passowrd={false} onReturn={(newValue: string) => {
            setValuePix(newValue)
        }}/>
        <View style={styles.bt}>
          <Buttom title='Pay' icon='' size={20} color='#FF1577' textColor='#FFFFFF' width={125} heigth={40} marginTop={140} border={90} just={'center'} aling={'center'} function={pay} padding={''}/>
        </View>
      </View>
    </View>
  );
}
