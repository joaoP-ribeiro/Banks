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

export default function SeeInvestments() {
  const authContext = useContext(AuthContext)
  const authToken = authContext.authToken
  const authAccount = authContext.account


  const [valuePix, setValuePix] = useState('')

  const schema = yup.object().shape({
    value: yup.string().required('Coloeque um valor'),
  });

  const invest = () =>{
    
  }

  return (
    <View style={styles.page}>
      <View style={styles.content}>
          <Title title="Bank" size={20} textColor="#FFFFFF" marginTop={'7%'} />
      </View>
      <View style={styles.main}>
        <Title title='Total Investments' size={20} textColor="#000" marginTop={'0%'} />
        <View style={styles.investiments}>
        <Perfil img="investPayImage" text={'1000.00'}/>
        </View>
        <View style={styles.bt}>
          <Buttom title='to withdraw' icon='' size={20} color='#FF1577' textColor='#FFFFFF' width={125} heigth={40} marginTop={140} border={90} just={'center'} aling={'center'} function={invest} padding={''}/>
        </View>
      </View>
    </View>
  );
}
