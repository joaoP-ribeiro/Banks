import {View, ScrollView, Alert, ActivityIndicator} from "react-native"
import { useState, useEffect } from 'react';
import Title from "../../Components/Title"
import axios from 'axios'
import styles from "./style"
import Headerr from "../../Components/Header"
import { useContext } from 'react';
import  { AuthContext } from '../../context'



export default function Home(){
    const authContext = useContext(AuthContext);
    const authToken = authContext.authToken;
    const authIdentificationNumber = authContext.valueIdentificationNumber

    const [isLoading, setIsLoading] = useState(true);
    const [apiData, setApiData] = useState(null);
  
    useEffect(() => {
        const info = async () =>{
            try{
                const peopleInfo = await axios.get(`http://10.109.71.7:8000/bank/api/v1/query/view/clients?search=${authIdentificationNumber}`, {
                    headers: {
                        'Authorization': `Token ${authToken}`
                    }
                });

                const response = peopleInfo.data
                

                setIsLoading(false)

                }
                catch(error) {
                Alert.alert('Error', String(error))
                }
            }
        info()
    }, []);

    return(
        <View style={styles.page}>
            {isLoading ?
                 (
                 <View style={styles.loading}>
                    <ActivityIndicator size="large" color="#7200E3" />
                 </View>
                 )
            :
                (
                    <View style={styles.content}>
                        <Title title='Bank' size={20} textColor='#FFFFFF' marginTop={'7%'}/>
                    </View>
                )
            }
           <Headerr name="João Pedro" photo="J"/>
            <View style={styles.main}></View>
        </View>
    )
}