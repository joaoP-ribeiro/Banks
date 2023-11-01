import React, { useState } from "react";
import { View } from "react-native";
import Title from "../../Components/Title";
import styles from "./style";
import Card from "../../Components/Card";
import Input from "../../Components/Input";
import ModalSelector from 'react-native-modal-selector';
import Buttom from "../../Components/Buttom";

export default function CardScreen() {
  const [value, setValue] = useState('')
  const [account, setAccount] = useState('')
  const [installments, setInstallments] = useState(3)

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
        <Input title='Account' marginTop={'2%'} width={'80%'} type={'numeric'} size={20} limit={14} passowrd={false} onReturn={(newValue: string) => {
            setAccount(newValue)
        }}/>
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
        
      </View>
    </View>
  );
}
