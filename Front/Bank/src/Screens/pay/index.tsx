import React, { useState } from "react";
import { View } from "react-native";
import Title from "../../Components/Title";
import styles from "./style";
import Headerr from "../../Components/Header";
import { useNavigation } from '@react-navigation/native';
import Buttom from "../../Components/Buttom";
import Perfil from "../../Components/Perfil";
import { ScrollView } from "react-native-gesture-handler";



export default function Pay() {
  const navigation = useNavigation();

  const pix = () =>{
    navigation.navigate('pix') 
  }

  return (
    <View style={styles.page}>
      <View style={styles.content}>
          <Title title="Bank" size={20} textColor="#FFFFFF" marginTop={'7%'} />
      </View>
      <Headerr />
        <View style={styles.main}>
          <ScrollView style={styles.scrol}>
            <View style={styles.buttons}>
              <Perfil img="payImage" text="Transaction Forms"/>
              <Buttom title='Pix' icon='' size={20} color='#E5E4E4' textColor='#FF1577' width={'85%'} heigth={65} marginTop={'7%'} border={32} just={'center'} aling={''} function={pix} padding={15}/>
              <Buttom title='Card' icon='' size={20} color='#E5E4E4' textColor='#FF1577' width={'85%'} heigth={65} marginTop={'7%'} border={32} just={'center'} aling={''} function={pix} padding={15}/>
              <Buttom title='Loan' icon='' size={20} color='#E5E4E4' textColor='#FF1577' width={'85%'} heigth={65} marginTop={'7%'} border={32} just={'center'} aling={''} function={pix} padding={15}/>
              <Buttom title='Investments' icon='' size={20} color='#E5E4E4' textColor='#FF1577' width={'85%'} heigth={65} marginTop={'7%'} border={32} just={'center'} aling={''} function={pix} padding={15}/>
            </View>
          </ScrollView>
        </View>
    </View>
  );
}
