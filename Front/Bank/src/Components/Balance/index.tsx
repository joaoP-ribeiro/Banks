import React, { useEffect, useContext, useState } from "react";
import { View, ActivityIndicator, Text } from "react-native";
import axiosInstance from "../../service/api";
import { AuthContext } from "../../context";
import styles from "./style";

interface Props {
  textColor: string,
}

export default function Balance({ textColor }: Props) {
  const authContext = useContext(AuthContext)
  const authToken = authContext.authToken
  const authAccount = authContext.account
  const authBalance = authContext.balance
  const [saldo, setSaldo] = useState<number | null>(null)

  const stileProps: Props = {
    textColor: textColor
  }

  const stylesP = styles(stileProps);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const balance = await axiosInstance.get(
          `/bank/api/v1/query/view/account?search=${authAccount}`,
          {
            headers: {
              Authorization: `Token ${authToken}`,
            },
          }
        );
        const response = balance.data;
        const saldo = response.results[0]["saldo"];
        authContext.setBalance(saldo);
        setSaldo(parseFloat(saldo));
      } catch (error) {
      }
    };

    const fetchInitialBalance = async () => {
      await fetchData();
      const interval = setInterval(() => {
        fetchData();
      }, 10000);

      return () => {
        clearInterval(interval);
      };
    };

    fetchInitialBalance();
  }, [authAccount, authToken, authBalance]);

  return (
    <View style={stylesP.balance}>
      <Text style={stylesP.text}>R$: {saldo === null ? <ActivityIndicator size="large" color="#7200E3" /> : saldo.toFixed(2)}</Text>
    </View>
  );
}
