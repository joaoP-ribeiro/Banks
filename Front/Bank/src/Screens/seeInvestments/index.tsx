import { useState, useContext, useEffect } from "react";
import { View, Alert } from "react-native";
import Title from "../../Components/Title";
import styles from "./style";
import Card from "../../Components/Card";
import * as yup from 'yup'
import { AuthContext } from "../../context";
import axiosInstance from "../../service/api";
import Buttom from "../../Components/Buttom";
import Perfil from "../../Components/Perfil";

export default function SeeInvestments() {
  const authContext = useContext(AuthContext)
  const authToken = authContext.authToken
  const authAccount = authContext.account

  const [valueInvest, setValueInvest] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const seeInvestments = await axiosInstance.get(`/bank/api/v1/query/view/historic?search=${authAccount}&transaction=${'Investments'}`,
          {
            headers: {
              Authorization: `Token ${authToken}`,
            },
          }
        )
        const response = seeInvestments.data
        const totalValue = response.results.reduce((sum: number, item: any) => sum + parseFloat(item.value), 0)
        console.log(totalValue)
        setValueInvest(totalValue)
      } catch (error) {} 
    }
    fetchData()
  },[])

  const withdraw = async () =>{
    try{
      const withdraw = await axiosInstance.post('/bank/api/v1/query/transaction/', {
          account: '5530021',
          receive_account: authAccount,
          value: valueInvest,
          typee: 'Investments'
        }, {
          headers: {
              'Authorization': `Token ${authToken}`
          }
      })
      Alert.alert('success', 'successful pix')
      }
      catch(error) {}
    }

  return (
    <View style={styles.page}>
      <View style={styles.content}>
          <Title title="Bank" size={20} textColor="#FFFFFF" marginTop={'7%'} />
      </View>
      <View style={styles.main}>
        <Title title='Total Investments' size={20} textColor="#000" marginTop={'0%'} />
        <Card/>
        <View style={styles.investiments}>
        <Perfil img="investPayImage" text={valueInvest}/>
        </View>
        <View style={styles.bt}>
          <Buttom title='to withdraw' icon='' size={20} color='#FF1577' textColor='#FFFFFF' width={125} heigth={40} marginTop={50} border={90} just={'center'} aling={'center'} function={withdraw} padding={''}/>
        </View>
      </View>
    </View>
  );
}
