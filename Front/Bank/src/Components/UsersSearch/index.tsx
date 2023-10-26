import { View, Text, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native'
import styles from "./style";

type Historic = {
  typee: string,
  name: string,
  account: number,
}


export default function UserSearch({transaction}: {transaction: Historic}) {
  const navigation = useNavigation()

  const payPix = () =>{
    navigation.navigate('pixPay', { account: transaction.account, name: transaction.name })
  }
  

  return (
    <TouchableOpacity 
      style={styles.row}
      onPress={payPix}
    >
      <View style={styles.container_name}>
        <Text style={styles.text}>{transaction.name.length > 12 ? `${transaction.name.slice(0, 12)}...` : transaction.name}</Text>
      </View>
      <View style={styles.space}></View>
      <View style={styles.container_type}>
          <Text style={styles.type}>{transaction.typee}</Text>
      </View>
    </TouchableOpacity>
  );
}


