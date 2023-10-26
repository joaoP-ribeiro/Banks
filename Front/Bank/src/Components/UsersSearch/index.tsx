import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";

type Historic = {
  typee: string,
  name: string,
  account: number,
}


export default function UserSearch({transaction}: {transaction: Historic}) {

  return (
    <TouchableOpacity style={styles.row}>
      <View style={styles.container_name}>
        <Text style={styles.text}>{transaction.name.length > 12 ? `${transaction.name.slice(0, 12)}...` : transaction.name}</Text>
      </View>
      <View style={styles.container_type}>
          <Text style={styles.type}>{transaction.typee}</Text>
      </View>
    </TouchableOpacity>
  );
}


