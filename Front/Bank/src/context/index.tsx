import  { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

type AuthContextData = {
  authToken: string | null;
  valueIdentificationNumber: string | null;
  setAuthToken: (token: string | null) => void;
  setValueIdentificationNumber: (identificationNumber: string | null) => void; 
};

type Children = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextData>({
  authToken: null,
  valueIdentificationNumber: null,
  setAuthToken: () => {},
  setValueIdentificationNumber: () => {},
});

export const AuthProvider = ({ children }: Children) => {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [valueIdentificationNumber, setValueIdentificationNumber] = useState<string | null>(null); 

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
    <AuthContext.Provider value={{ authToken, valueIdentificationNumber, setAuthToken: saveAuthToken, setValueIdentificationNumber }}>
      {children}
    </AuthContext.Provider>
  );
};
