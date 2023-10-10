import  { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

type AuthContextData = {
  authToken: string | null
  valueIdentificationNumber: string | null
  name: string | null
  img: string | null

  setAuthToken: (token: string | null) => void
  setValueIdentificationNumber: (identificationNumber: string | null) => void
  setName: (name: string | null) => void
  setImg: (image: string | null) => void
};

type Children = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextData>({
  authToken: null,
  valueIdentificationNumber: null,
  name: null,
  img: null,

  setAuthToken: () => {},
  setValueIdentificationNumber: () => {},
  setName: () => {},
  setImg: () => {},
});

export const AuthProvider = ({ children }: Children) => {
  const [authToken, setAuthToken] = useState<string | null>(null)
  const [valueIdentificationNumber, setValueIdentificationNumber] = useState<string | null>(null)
  const [name, setName] = useState<string | null>(null)
  const [img, setImg] = useState<string | null>(null)

  useEffect(() => {
    const fetchAuthToken = async () => {
      try {
        const existingToken = await AsyncStorage.getItem('authToken');

        if (existingToken) {
          setAuthToken(existingToken);
        }
      } catch (error) {
        console.error('Erro ao recuperar o token:', error);
      }
    };

    fetchAuthToken();
  }, []);

  const saveAuthToken = async (token: string | null) => {
    try {
      if (token) {
        await AsyncStorage.setItem('authToken', token);
      } else {
        await AsyncStorage.removeItem('authToken');
      }

      setAuthToken(token);
    } catch (error) {
      console.error('Erro ao armazenar o token:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ authToken, valueIdentificationNumber, name, img,  setAuthToken: saveAuthToken, setValueIdentificationNumber, setName, setImg }}>
      {children}
    </AuthContext.Provider>
  );
};
