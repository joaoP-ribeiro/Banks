import React, { useContext } from "react";
import { View } from "react-native";
import Title from "../../Components/Title";
import { useNavigation } from '@react-navigation/native';
import styles from "./style";
import Buttom from "../../Components/Buttom";
import { AuthContext } from "../../context";

export default function User() {
  const authContext = useContext(AuthContext)
  const navigation = useNavigation();

  const login = () =>{
    navigation.navigate('login')
  }

  return (
    <View style={styles.page}>
      <View style={styles.content}>
          <Title title="Bank" size={20} textColor="#FFFFFF" marginTop={'7%'} />
      </View>
      
      <View style={styles.main}>
      <Buttom title='Logout' icon='' size={20} color='transparent' textColor='#AFAFAF' width={'100%'} heigth={30} marginTop={"5%"} border={0} just={''} aling={''} function={login} padding={''}/>
       
      </View>
    </View>
  );
}
