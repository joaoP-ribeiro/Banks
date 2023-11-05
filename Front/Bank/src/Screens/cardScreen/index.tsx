import React, { useState, useContext } from "react";
import { View, Alert } from "react-native";
import Title from "../../Components/Title";
import styles from "./style";
import * as yup from 'yup'
import Input from "../../Components/Input";
import ModalSelector from 'react-native-modal-selector';
import Buttom from "../../Components/Buttom";
import { AuthContext } from "../../context";
import axiosInstance from "../../service/api";
import Balance from "../../Components/Balance";

export default function CardScreen() {
  const authContext = useContext(AuthContext)
  const authToken = authContext.authToken
  const authBalance = authContext.balance
  const authAccount = authContext.account
  const [account, setAccount] = useState('')
  const [installments, setInstallments] = useState(3)

  const installmentsData = [
    { key: 3, label: "3" },
    { key: 6, label: "6" },
    { key: 12, label: "12" }
  ];

  const [valuePix, setValuePix] = useState('')

  const schema = yup.object().shape({
    value: yup.string().required('Enter a value'),
    account: yup.string().required('Enter a account')
  });

  const pay = async () =>{
    await schema.validate({ value: valuePix, account: account}, { abortEarly: false });
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
            value: valueNumber,
            typee: 'Pix',
            installments: installments
          }, {
            headers: {
                'Authorization': `Token ${authToken}`
            }
        })
        Alert.alert('success', 'successful pix')
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
        <Balance textColor="#232323"/>
        <Input title='Account' marginTop={'2%'} width={'80%'} type={'numeric'} size={20} limit={14} passowrd={false} onReturn={(newValue: string) => {
            setAccount(newValue)
        }}/>
        <Input title='Value' marginTop={'2%'} width={'80%'} type={'numeric'} size={20} limit={14} passowrd={false} onReturn={(newValue: string) => {
            setValuePix(newValue)
        }}/>
        <View style={styles.container_select}>
          <ModalSelector
            style={styles.select}
            data={installmentsData}
            initValue="Installments"
            initValueTextStyle={{ color: '#232323', fontWeight: 'bold' }}
            onChange={(option) => setInstallments(option.key)}
          />
        </View>
        <View style={styles.bt}>
          <Buttom title='Pay' icon='' size={20} color='#FF1577' textColor='#FFFFFF' width={125} heigth={40} marginTop={140} border={90} just={'center'} aling={'center'} function={pay} padding={''}/>
        </View>
      </View>
    </View>
  );
}
