import { useEffect, useContext, useState } from "react";
import { View, ActivityIndicator} from "react-native";
import axios from "axios";
import Row from "../Row";
import { AuthContext } from "../../context";
import styles from "./style";
import { ScrollView } from "react-native-gesture-handler";



export default function Historic() {
  const authContext = useContext(AuthContext)
  const authToken = authContext.authToken
  const authAccount = authContext.account
  const [loading, setLoading] = useState(true)
  const [historic, setHistoric] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const historic = await axios.get(
          `http://10.109.71.7:8000/bank/api/v1/query/view/historic?search=${authAccount}`,
          {
            headers: {
              Authorization: `Token ${authToken}`,
            },
          }
        )
        const response = historic.data
        
        if (response.results.length === 0) {
          setLoading(true);
        } else {
          setLoading(false);
          setHistoric(response["results"])
        }
      } catch (error) {

      } 
    }

    if (loading) {
      fetchData()
    }
  }, [authAccount, authToken, authContext, loading])

  return (
    <View style={styles.historic}>
      {loading ? (
        <ActivityIndicator size="large" color="#7200E3" />
      ) : (
        <View style={styles.cards}>
          <ScrollView>
            {historic.slice(0, 5).map((transaction, index) => (
             <Row  key={index} transaction={transaction}/>
            )
        )}
        </ScrollView>
        </View>
      )}
    </View>
  );
}
