import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Title from "../../Components/Title";
import styles from "./style";
import Top from "../../Components/Top";
import Card from "../../Components/Card";
import Input from "../../Components/Input";
import Search from "../../Components/Search";
import ModalSelector from 'react-native-modal-selector';
import Buttom from "../../Components/Buttom";

export default function Loan() {
  const [value, setValue] = useState('');
  const [installments, setInstallments] = useState(3);

  const installmentsData = [
    { key: 3, label: "3" },
    { key: 6, label: "6" },
    { key: 12, label: "12" }
  ];

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Title title="Bank" size={20} textColor="#FFFFFF" marginTop={'7%'} />
      </View>
      <View style={styles.main}>   
        <Card/>
        <Input title='Value' marginTop={'7%'} width={'80%'} type={'numeric'} size={20} limit={14} passowrd={false} onReturn={(newValue: string) => {
            setValue(newValue)
        }}/>
        <Top title="Installments" marginTop={'5%'} />
        <View style={styles.container_select}>
          <ModalSelector
            style={styles.select}
            data={installmentsData}
            initValue="Installments"
            initValueTextStyle={{ color: '#232323', fontWeight: 'bold' }}
            
            onChange={(option) => setInstallments(option.key)}
          />
        </View>
        <Buttom title='Pay' icon='' size={20} color='#FF1577' textColor='#FFFFFF' width={125} heigth={40} marginTop={140} border={90} just={'center'} aling={'center'} function={} padding={''}/>
      </View>
    </View>
  );
}
