import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import Title from "../../Components/Title";
import styles from "./style";
import Top from "../../Components/Top";
import Card from "../../Components/Card";
import Input from "../../Components/Input"

export default function Pix() {
  const [keyPix, setKeyPix] = useState('')

  return (
    <View style={styles.page}>
      <View style={styles.content}>
          <Title title="Bank" size={20} textColor="#FFFFFF" marginTop={'7%'} />
      </View>
      <View style={styles.main}>
        <Top title="" marginTop={'0%'} />
        <Card/>
        <Input title='Pix/Key' marginTop={'7%'} width={'80%'} type={'numeric'} size={20} limit={14} passowrd={false} onReturn={(newValue: string) => {
            setKeyPix(newValue)
        }}/>
        
      </View>
    </View>
  );
}
