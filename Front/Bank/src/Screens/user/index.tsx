import { useEffect, useState } from "react";
import { View, Image, Alert } from "react-native";
import Title from "../../Components/Title";
import { useNavigation } from '@react-navigation/native';
import styles from "./style";
import { useContext } from 'react';
import Buttom from "../../Components/Buttom";
import Headerr from "../../Components/Header";
import axiosInstance from "../../service/api";
import axios from "axios";
import { AuthContext } from "../../context";
import * as ImagePicker from 'expo-image-picker';

export default function User() {
  const authContext = useContext(AuthContext)
  const authIdentificationNumber = authContext.valueIdentificationNumber
  const authToken = authContext.authToken


  const gallery = async () => {
    const { assets, canceled } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      base64: true,
      quality: 1,
    });
    if (canceled) {
        console.log('erro')
    }
    else {
      const filename = assets[0].uri.substring(
        assets[0].uri.lastIndexOf("/") + 1,
        assets[0].uri.length
      );
      const extend = filename.split(".")[1];
      const formData = new FormData();
      formData.append(
        "photograph",
        JSON.parse(
          JSON.stringify({
            name: filename,
            uri: assets[0].uri,
            type: "image/" + extend,
          })
        )
      );
      console.log(formData)
      img(formData)
  }
}

  const img = async (formData: FormData) =>{
    try {
      
      const imgResponse = await axiosInstance.patch(`/bank/api/v1/auth/users/${authIdentificationNumber}/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Token ${authToken}`
        }
      });
      
      console.log('Image response:', imgResponse.data);
    } catch(error){
      console.log(error)
    }
  }

  const cardAlert = () =>{
    Alert.alert('Card', 'your card order has been sent')
  }

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Title title="Bank" size={20} textColor="#FFFFFF" marginTop={'7%'} />
      </View>
      <Headerr />
      <View style={styles.main}>
        <View style={styles.container_img}>
          <Buttom title='' icon='image' size={40} color='#FF1577' textColor='#000' width={100} heigth={100} marginTop={"5%"} border={12} just={'center'} aling={'center'} function={gallery} padding={''} />
        </View>
        <View style={styles.container_img}>
          <Buttom title='card order' icon='' size={20} color='transparent' textColor='#AFAFAF' width={'100%'} heigth={30} marginTop={"5%"} border={0} just={''} aling={''} function={cardAlert} padding={'30'} />
        </View>
      </View>
    </View>
  );//
}
