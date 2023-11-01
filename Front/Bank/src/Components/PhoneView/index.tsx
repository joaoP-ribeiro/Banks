import {View, Text} from "react-native"
import { TextInputMask } from 'react-native-masked-text'
import {useState} from "react"
import styles from "./style"



export default function PhoneView(){
    const authContext = useContext(AuthContext)
  const authIdentificationNumber = authContext.valueIdentificationNumber
  const authToken = authContext.authToken


  useEffect(() => {
    const info = async () =>{
        try{
            const peopleInfo = await axiosInstance.get(`/bank/api/v1/query/view/clients?search=${authIdentificationNumber}`, {
                headers: {
                    'Authorization': `Token ${authToken}`
                }
            });

            const response = peopleInfo.data   
            }
        catch(error) {
           
        }
    }
    }, []);

    

    return(
        <View style={styles.phone}>
            <Text style={styles.text}>{title}</Text>
            <TextInputMask
                style={styles.inp}
                type={'cel-phone'}
                options={{
                    maskType: 'BRL',
                    withDDD: true,
                    dddMask: '(99) ',
                }}
                value={value}
                onChangeText={writing}
            />
        </View>
    )
}