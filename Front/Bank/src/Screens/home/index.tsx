import {View, ScrollView, Alert, ActivityIndicator} from "react-native"
import { useState, useEffect } from 'react';
import Title from "../../Components/Title"
import axios from 'axios'
import styles from "./style"
import Headerr from "../../Components/Header"
import { useContext } from 'react';
import  { AuthContext } from '../../context'
import Top from "../../Components/Top";
import Card from "../../Components/Card";



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
                const typee = response.results[0].typee
                const photograph = response.results[0].photograph
                const account = response.results[0].account       
                let resultToDisplay;

                if (typee === 'Normal') {
                    resultToDisplay = response.results[0].natural_person["name"];
                } 
                else{
                    resultToDisplay = response.results[0].legal_person["fantasy_name"];
                }
                authContext.setImg(photograph)
                authContext.setName(resultToDisplay)
                authContext.setAccount(account)
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
            <Headerr name={authContext.name} photo={authContext.img}/>
            <View style={styles.main}>
                <Top title="Card" marginTop={'8%'}/>
                <Card/>
            </View>
        </View>
    )
}