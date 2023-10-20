import React, { useEffect, useContext, useState } from "react";
import { View, Alert, Image, ActivityIndicator } from "react-native";
import axios from "axios";
import { AuthContext } from "../../context";
import styles from "./style";

export default function Card() {
  const authContext = useContext(AuthContext);
  const authToken = authContext.authToken;
  const authAccount = authContext.account;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const card = await axios.get(
          `http://10.109.71.7:8000/bank/api/v1/query/view/card/?search=${authAccount}`,
          {
            headers: {
              Authorization: `Token ${authToken}`,
            },
          }
        );
        const response = card.data;
        if (response.results.length === 0) {
            setLoading(true);
          } else {
            setLoading(false);
          }
      } catch (error) {
        Alert.alert("Error", String(error));
      } 
    };
    fetchData();
  }, []);

  return (
    <View style={styles.card}>
      {loading ? (
         <ActivityIndicator size="large" color="#7200E3" />
      ) : (
        <Image
          source={require("../../../assets/card.png")}
          style={styles.img}
          resizeMode="contain"
        />
      )}
    </View>
  );
}
