import React, { useContext } from "react";
import { View } from "react-native";
import Title from "../../Components/Title";
import styles from "./style";
import { AuthContext } from "../../context";
import Historic from "../../Components/Historic";

export default function Stratum() {
  const authContext = useContext(AuthContext)
  const authAccount = authContext.account

  return (
    <View style={styles.page}>
      <View style={styles.content}>
          <Title title="Bank" size={20} textColor="#FFFFFF" marginTop={'7%'} />
      </View>
      
      <View style={styles.main}>
      <Title title='Stratum' size={30} textColor='#000' marginTop={'5%'}/>
      <Historic baseUrl="/bank/api/v1/query/view/historic?search=" search={authAccount} number={-10}/>
      </View>
    </View>
  );
}
