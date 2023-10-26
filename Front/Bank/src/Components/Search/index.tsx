import { useEffect, useContext, useState } from "react";
import { View, Text, ActivityIndicator} from "react-native";
import axios from "axios";
import TransactionsSearch from "../TransactionsSearch";
import UserSearch from "../UsersSearch";
import { AuthContext } from "../../context";
import styles from "./style";
import axiosInstance from "../../service/api";
import { ScrollView } from "react-native-gesture-handler";

interface Props{
  baseUrl: string
  search: string | null
  useRow: number
}

export default function Search({baseUrl, search, useRow}: Props) {
  const authContext = useContext(AuthContext)
  const authToken = authContext.authToken
  
  const [loading, setLoading] = useState(true)
  const [historic, setHistoric] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fullUrl = baseUrl + search
        const historic = await 
          axiosInstance.get(fullUrl,
          {
            headers: {
              Authorization: `Token ${authToken}`,
            },
          }
        )
        const response = historic.data
        
        if (response.results.length === 0) {
          setLoading(true)
        } else {
          setLoading(false);
          setHistoric(response["results"])
        }
      } catch (error) {

      } 
    }
    const timeout = setTimeout(() => {
      if (search) {
        fetchData();
      }
    }, 1000); 

    return () => {
      clearTimeout(timeout);
    };
  }, [search])

  return (
    <View style={styles.historic}>
      {loading ? (
        <ActivityIndicator size="large" color="#7200E3" />
      ) : (
        <View style={styles.cards}>
        {historic.length > 0 ? (
          <ScrollView>
            {historic.slice(0, 5).map((transaction, index) => (
              useRow === 1 ?
              (<TransactionsSearch key={index} transaction={transaction} />)
              :
              (<UserSearch key={index} transaction={transaction} />)
            ))}
          </ScrollView>
        ) : (
          <Text>No transaction history available</Text>
        )}
      </View>
      )}
    </View>
  );
}
