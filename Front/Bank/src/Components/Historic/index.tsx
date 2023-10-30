import { useEffect, useContext, useState } from "react";
import { View, Text, ActivityIndicator} from "react-native";
import TransactionsSearch from "../TransactionsSearch";
import { AuthContext } from "../../context";
import styles from "./style";
import axiosInstance from "../../service/api";
import { ScrollView } from "react-native-gesture-handler";

interface Props{
  baseUrl: string
  search: string | null
  number: number
}

export default function Historic({baseUrl, search, number}: Props) {
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
    }, 10000); 

    return () => {
      clearTimeout(timeout);
    };
  })

  return (
    <View style={styles.historic}>
      {loading ? (
        <ActivityIndicator size="large" color="#7200E3" />
      ) : (
        <View style={styles.cards}>
        {historic.length > 0 ? (
          <ScrollView>
            {historic.slice(number).reverse().map((transaction, index) => (
              <TransactionsSearch key={index} transaction={transaction} />
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
