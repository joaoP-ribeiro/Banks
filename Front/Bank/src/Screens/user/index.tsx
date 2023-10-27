import React, { useContext } from "react";
import { View } from "react-native";
import Title from "../../Components/Title";
import styles from "./style";
import { AuthContext } from "../../context";

export default function User() {
  const authContext = useContext(AuthContext)

  return (
    <View style={styles.page}>
      <View style={styles.content}>
          <Title title="Bank" size={20} textColor="#FFFFFF" marginTop={'7%'} />
      </View>
      
      <View style={styles.main}>
        
       
      </View>
    </View>
  );
}
