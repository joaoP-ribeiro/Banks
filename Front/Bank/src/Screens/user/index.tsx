import { useEffect, useState } from "react";
import { View, Image } from "react-native";
import Title from "../../Components/Title";
import { useNavigation } from '@react-navigation/native';
import styles from "./style";
import Buttom from "../../Components/Buttom";
import Headerr from "../../Components/Header";
import axiosInstance from "../../service/api";
import { AuthContext } from "../../context";
import * as ImagePicker from 'expo-image-picker';

export default function User() {
  const navigation = useNavigation();
  const [imageG, setImageG] = useState('');

  const gallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (result?.assets?.[0]) {
      const imageUri = result.assets[0].uri;
      setImageG(imageUri);
    }
  }

  const login = () => {
    navigation.navigate('login');
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
        <Buttom title='Logout' icon='' size={20} color='transparent' textColor='#AFAFAF' width={'100%'} heigth={30} marginTop={"5%"} border={0} just={''} aling={''} function={login} padding={''} />
      </View>
    </View>
  );
}
