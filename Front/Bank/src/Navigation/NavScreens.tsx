import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthProvider } from '../context';

import InicialPage from '../Screens/inicialPage';
import Login from '../Screens/login';
import CreateAccount from '../Screens/createAccount';
import NormalAccount from '../Screens/normalAccount';
import LegalAccount from '../Screens/legalAccount';
import Address from '../Screens/address';
import Contact from '../Screens/contact';
import TabNav from './TabNav';
import Account from '../Screens/account';
import Pix from '../Screens/pix';
import PixPay from '../Screens/pixPay';
import User from '../Screens/user';
import Loan from '../Screens/loan';

const Stack = createStackNavigator()

export default function NavScreens() {
  
    return (
      <NavigationContainer>
        <AuthProvider>
          <Stack.Navigator initialRouteName="loan">
            <Stack.Screen name="login" component={Login} options={{headerShown: false}}/>
            <Stack.Screen name="createAccount" component={CreateAccount} options={{headerShown: false}}/>
            <Stack.Screen name="normalAccount" component={NormalAccount} options={{headerShown: false}}/>
            <Stack.Screen name="inicialPage" component={InicialPage} options={{headerShown: false}}/>
            <Stack.Screen name="legalAccount" component={LegalAccount} options={{headerShown: false}}/>
          
            <Stack.Screen name="address" component={Address} options={{headerShown: false}}/>
            <Stack.Screen name="account" component={Account} options={{headerShown: false}}/>
            <Stack.Screen name="contact" component={Contact} options={{headerShown: false}}/>
            <Stack.Screen name="home" component={TabNav} options={{headerShown: false}}/>
            <Stack.Screen name="pix" component={Pix} options={{headerShown: false}}/>
            <Stack.Screen name="pixPay" component={PixPay} options={{headerShown: false}}/>
            <Stack.Screen name="user" component={User} options={{headerShown: false}}/>
            <Stack.Screen name="loan" component={Loan} options={{headerShown: false}}/>
          </Stack.Navigator>
        </AuthProvider>
      </NavigationContainer>
    );
  }