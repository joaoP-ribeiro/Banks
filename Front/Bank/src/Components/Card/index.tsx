import React, { useEffect, useContext, useState } from "react";
import { View, ImageBackground , ActivityIndicator, Text} from "react-native";
import axios from "axios";
import axiosInstance from "../../service/api";
import { AuthContext } from "../../context";
import styles from "./style";
import Balance from "../Balance";




export default function Card() {
  const authContext = useContext(AuthContext);
  const authToken = authContext.authToken;
  const authAccount = authContext.account;
  const [loading, setLoading] = useState(true);
  const [expirationDate, setExpirationDate] = useState('')
  const [number, setNumber] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(authAccount)
        const card = await axiosInstance.get(`/bank/api/v1/query/view/card/?search=${authAccount}`,
          {
            headers: {
              Authorization: `Token ${authToken}`,
            },
          }
        );
        const response = card.data;
        const expirate = response.results[0]['expiration_date']
        const number = response.results[0]['number']
        setExpirationDate(expirate)
        setNumber(number)
        authContext.setCard(number)
        if (response.results.length === 0) {
            setLoading(true);
          } else {
            setLoading(false);
          }
      } catch (error) {
      } 
    };
    if (loading) {
      fetchData();
    }
  }, [authAccount, authToken, authContext, loading]);

  return (
    <View style={styles.card}>
      {loading ? (
        <ActivityIndicator size="large" color="#7200E3" />
      ) : (
        <ImageBackground
          source={require("../../../assets/card.png")}
          style={styles.backgroundImage}
        >
          <View style={styles.container_card}>
            <View style={styles.container_saldo}>
              <Balance />
            </View>
            <View  style={styles.container_inf}>
              <View style={styles.number}>
                <Text style={styles.text1}>Number</Text>
                <Text style={styles.text2}>{number}</Text>
              </View>
              <View style={styles.date}>
                <Text style={styles.text1}>Date</Text>
                <Text style={styles.text2}>{expirationDate}</Text>
              </View>
            </View>
          </View>
          
        </ImageBackground>
      )}

    </View>
  );
}
