import React, { useState } from "react";
import { View } from "react-native";
import Title from "../../Components/Title";
import styles from "./style";
import Headerr from "../../Components/Header";
import { useNavigation } from '@react-navigation/native';
import Buttom from "../../Components/Buttom";
import Perfil from "../../Components/Perfil";
import { ScrollView } from "react-native-gesture-handler";



export default function Investments() {
  const navigation = useNavigation();

  const invest = () =>{
    navigation.navigate('invest') 
  }

  const seeInvestments = () =>{
    navigation.navigate('seeInvestments') 
  }


  return (
    <View style={styles.page}>
      <View style={styles.content}>
          <Title title="Bank" size={20} textColor="#FFFFFF" marginTop={'7%'} />
      </View>
        <View style={styles.main}>
          <ScrollView style={styles.scrol}>
            <View style={styles.buttons}>
              <Perfil img="investImage" text="Investments for life"/>
              <Buttom title='Invest' icon='' size={20} color='#E5E4E4' textColor='#FFBD15' width={'85%'} heigth={65} marginTop={'7%'} border={32} just={'center'} aling={''} function={invest} padding={15}/>
              <Buttom title='See Investments' icon='' size={20} color='#E5E4E4' textColor='#FFBD15' width={'85%'} heigth={65} marginTop={'7%'} border={32} just={'center'} aling={''} function={seeInvestments} padding={15}/>
            </View>
          </ScrollView>
        </View>
    </View>
  );
}
