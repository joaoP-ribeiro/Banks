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

export default function Invest() {
  const authContext = useContext(AuthContext)
  const authToken = authContext.authToken
  const authAccount = authContext.account
  const authBalance = authContext.balance


  const [valueInvest, setValueInvest] = useState('')

  const schema = yup.object().shape({
    value: yup.string().required('Coloeque um valor'),
  });

  const invest = async () =>{
    await schema.validate({ value: valueInvest}, { abortEarly: false });
    const valueNumber = parseFloat(valueInvest)
    setValueInvest('')
    if(authBalance !== null && valueNumber > authBalance){
      Alert.alert('Value', 'insufficient balance')
    }
    else{
      
      try{
        
        const invest = await axiosInstance.post('/bank/api/v1/query/transaction/', {
            account: authAccount,
            receive_account: '5530021',
            value: valueNumber,
            typee: 'Investments'
          }, {
            headers: {
                'Authorization': `Token ${authToken}`
            }
        })
        Alert.alert('success', 'successful investment')
        
        }
        catch(error) {setValueInvest('')
        }
    }
  }

  return (
    <View style={styles.page}>
      <View style={styles.content}>
          <Title title="Bank" size={20} textColor="#FFFFFF" marginTop={'7%'} />
      </View>
      <View style={styles.main}>
        <Title title='Invest' size={20} textColor="#000" marginTop={'0%'} />
        <Top title='Your Balance' marginTop={'0%'} />
        <Input title='Invest' marginTop={'7%'} width={'80%'} type={'numeric'} size={20} limit={14} passowrd={false} onReturn={(newValue: string) => {
            setValueInvest(newValue)
        }}/>
        <View style={styles.bt}>
          <Buttom title='Invest' icon='' size={20} color='#FF1577' textColor='#FFFFFF' width={125} heigth={40} marginTop={140} border={90} just={'center'} aling={'center'} function={invest} padding={''}/>
        </View>
      </View>
    </View>
  );
}
