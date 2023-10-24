import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import Title from "../../Components/Title";
import styles from "./style";
import Headerr from "../../Components/Header";
import Top from "../../Components/Top";
import Card from "../../Components/Card";
import Historic from "../../Components/Historic";

export default function Home() {

  return (
    <View style={styles.page}>
      <View style={styles.content}>
          <Title title="Bank" size={20} textColor="#FFFFFF" marginTop={'7%'} />
      </View>
      <Headerr />
      <View style={styles.main}>
        <Top title="Card" marginTop={'8%'} />
        <Card/>
        <Top title="Historic" marginTop={'5%'} />
        <Historic />
      </View>
    </View>
  );
}
