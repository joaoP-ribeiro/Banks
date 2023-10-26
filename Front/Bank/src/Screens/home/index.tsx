import React, { useContext } from "react";
import { View, TouchableOpacity } from "react-native";
import Title from "../../Components/Title";
import styles from "./style";
import { AuthContext } from "../../context";
import Headerr from "../../Components/Header";
import Top from "../../Components/Top";
import Card from "../../Components/Card";
import Search from "../../Components/Search";
import { ScrollView } from "react-native-gesture-handler";

export default function Home() {
  const authContext = useContext(AuthContext)
  const authAccount = authContext.account

  return (
    <View style={styles.page}>
      <View style={styles.content}>
          <Title title="Bank" size={20} textColor="#FFFFFF" marginTop={'7%'} />
      </View>
      <Headerr />
      <View style={styles.main}>
        <ScrollView style={styles.scrol}>
          <View style={styles.infos}>
            <Top title="Card" marginTop={'8%'} />
            <Card/>
            <Top title="Historic" marginTop={'5%'} />
            <Search baseUrl="/bank/api/v1/query/view/historic?search=" search={authAccount} useRow={2} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
