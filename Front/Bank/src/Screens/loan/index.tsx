import { useState, useContext } from "react";
import { View, Alert } from "react-native";
import Title from "../../Components/Title";
import styles from "./style";
import Card from "../../Components/Card";
import Input from "../../Components/Input";
import ModalSelector from 'react-native-modal-selector';
import Buttom from "../../Components/Buttom";
import * as yup from 'yup'
import { AuthContext } from "../../context";
import axiosInstance from "../../service/api";

export default function Loan() {
  const [value, setValue] = useState('');
  const [installments, setInstallments] = useState(3);
  const authContext = useContext(AuthContext)
  const authToken = authContext.authToken
  const authAccount = authContext.account
  const authBalance = authContext.balance

  const installmentsData = [
    { key: 3, label: "3" },
    { key: 6, label: "6" },
    { key: 12, label: "12" }
  ];

  const loan = async () =>{
    const valueNumber = parseFloat(value)
    try {
      const loan = await axiosInstance.post('/bank/api/v1/query/loan/', {
        account: authAccount,
        times: installments,
        value: valueNumber,
        typee: 'Loan',
      }, {
        headers: {
          'Authorization': `Token ${authToken}`,
        },
      });
      alert()
    } catch (error) {
      
    }   
  }

  const alert = () =>{
    Alert.alert('success', 'Successful loan');
  }

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Title title="Bank" size={20} textColor="#FFFFFF" marginTop={'7%'} />
      </View>
      <View style={styles.main}>   
        <Card/>
        <Input title='Value' marginTop={'2%'} width={'80%'} type={'numeric'} size={20} limit={14} passowrd={false} onReturn={(newValue: string) => {
            setValue(newValue)
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
        <Buttom title='Pay' icon='' size={20} color='#FF1577' textColor='#FFFFFF' width={125} heigth={40} marginTop={140} border={90} just={'center'} aling={'center'} function={loan} padding={''}/>
      </View>
    </View>
  )
}
