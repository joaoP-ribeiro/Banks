import React, { useEffect, useContext, useState } from "react";
import { View, ActivityIndicator, Text} from "react-native";
import axios from "axios";
import { AuthContext } from "../../context";
import styles from "./style";

export default function Balance() {
  const authContext = useContext(AuthContext)
  const authToken = authContext.authToken
  const authAccount = authContext.account
  const [saldo, setSaldo] = useState<number | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const balance = await axios.get(
          `http://10.109.71.7:8000/bank/api/v1/query/view/account?search=${authAccount}`,
          {
            headers: {
              Authorization: `Token ${authToken}`,
            },
          }
        );
        const response = balance.data;
        const saldo = response.results[0]["saldo"];
        setSaldo(parseFloat(saldo));
      } catch (error) {
       
      }
    };
  
    const interval = setInterval(() => {
      fetchData();
    }, 5000); 
  
    return () => {
      clearInterval(interval);
    };
  }, [authAccount, authToken]);
  

  return (
    <View style={styles.balance}>
      {saldo === null ? (
        <ActivityIndicator size="large" color="#FF1577" />
      ) : (
        <Text style={styles.text}>R$: {saldo}</Text>
      )}
    </View>
  );
}
