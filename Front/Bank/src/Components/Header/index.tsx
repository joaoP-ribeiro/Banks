import {View, Text, TouchableOpacity, Image} from "react-native"
import FeatherIcon from 'react-native-vector-icons/Feather'
import { useState, useEffect } from 'react';
import axios from 'axios'
import axiosInstance from "../../service/api";
import { useContext } from 'react';
import  { AuthContext } from '../../context'
import { useNavigation } from '@react-navigation/native'
import styles from "./style"

export default function Headerr(){
    const authContext = useContext(AuthContext)
    const authToken = authContext.authToken
    const authName = authContext.name
    const authIdentificationNumber = authContext.valueIdentificationNumber
    const navigation = useNavigation()
    const [loading, setLoading] = useState(true)
    const [name, setName] = useState<string | null>(null)

  
    useEffect(() => {
        const info = async () =>{
            try{
                const peopleInfo = await axiosInstance.get(`/bank/api/v1/query/view/clients?search=${authIdentificationNumber}`, {
                    headers: {
                        'Authorization': `Token ${authToken}`
                    }
                });

                const response = peopleInfo.data
                const typee = response.results[0].typee
                const photograph = response.results[0].photograph
                const account = response.results[0].account_view[0]["number"]    
                let resultToDisplay;

                if (typee === 'Normal') {
                    resultToDisplay = response.results[0].natural_person["name"];
                } 
                else{
                    resultToDisplay = response.results[0].legal_person["fantasy_name"];
                }
                authContext.setImg(photograph)
                console.log(photograph)
                authContext.setName(resultToDisplay)
                authContext.setAccount(account)
                setName(authName)
                setLoading(false)
                }
            catch(error) {
               
            }
        }
        if (loading) {
            info();
          }
        }, [authToken, authContext, loading]);

        const user = () =>{
            navigation.navigate('user')
        }

    return(
        <View style={styles.header}>
            <TouchableOpacity style={styles.column1}
                onPress={user}
            >
                <FeatherIcon name={'user'} size={30} color={'#FFF'}/>
            </TouchableOpacity>
            <View style={styles.column2}>
                {authContext.name !== null?
                    <Text style={styles.text}>{authContext.name.length > 12 ? `${authContext.name.slice(0, 12)}...` : authContext.name}</Text>
                :
                    <Text style={styles.text}>NOT NAME</Text>
                }
            </View>
            <View style={styles.column3}>
                {!authContext.img ? 
                    <View style={styles.contFistLetter}>
                        <Text style={styles.text}>{ name ? name[0]: null}</Text>
                    </View>
                : 
                    <View style={styles.contFistLetter}>
                        <Image
                           source={{uri : authContext.img}}
                           style={styles.img} 
                        />
                    </View>}
            </View>
        </View>
    )
}