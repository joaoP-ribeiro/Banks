import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import InicialPage from '../Screens/inicialPage';
import Login from '../Screens/login';
import CreateAccount from '../Screens/createAccount';
import TypeAccount from '../Screens/typeAccount';
import Anddress from '../Screens/anddress';

const Stack = createStackNavigator()

export default function NavScreens() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="inicialPage">
          <Stack.Screen name="inicialPage" component={InicialPage} options={{headerShown: false}}/>
          <Stack.Screen name="login" component={Login} options={{headerShown: false}}/>
          <Stack.Screen name="createAccount" component={CreateAccount} options={{headerShown: false}}/>
          <Stack.Screen name="typeAccount" component={TypeAccount} options={{headerShown: false}}/>
          <Stack.Screen name="anddress" component={Anddress} options={{headerShown: false}}/>
        
        </Stack.Navigator>
      </NavigationContainer>
    );
  }