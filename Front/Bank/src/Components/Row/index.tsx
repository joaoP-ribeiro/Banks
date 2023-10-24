
import { View, Text} from "react-native";
import FeatherIcon from 'react-native-vector-icons/Feather'
import styles from "./style";

type Historic = {
  transaction: string,
  name: string,
  number: number,
  value: number,
  positive_negative: string,
  date: string
}


export default function Row({transaction}: {transaction: Historic}) {

  return (
    <View style={styles.row}>
      <View style={styles.container_icon}>
        <View style={styles.icon}>
          {transaction.positive_negative === '+'?
            (<FeatherIcon name={'corner-right-up'} size={20} color={'#64AE41'} />)
          :
            (<FeatherIcon name={'corner-right-down'} size={20} color={'#E52144'} />)
          }
        </View>
      </View>
      <View style={styles.container_inf}>
        <View style={styles.name}>
          <Text style={styles.text}>{transaction.name.length > 12 ? `${transaction.name.slice(0, 12)}...` : transaction.name}</Text>
        </View>
        <View style={styles.infos}>
          <View style={styles.info}>
            <Text style={styles.tipe}>{transaction.transaction}</Text>
          </View>
          {/* 
          <View style={styles.info}>
            <Text style={styles.tipe}>{transaction.number}</Text>
          </View>
          */}
        </View>
      </View>
      <View style={styles.container_value}>
          <Text style={styles.tipe}>RS:</Text>
          <Text style={styles.value}>{transaction.value}</Text>
      </View>
    </View>
  );
}


