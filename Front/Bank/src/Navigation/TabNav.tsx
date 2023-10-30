import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet } from 'react-native'
import Home from '../Screens/home'
import FeatherIcon from 'react-native-vector-icons/Feather'
import Pix from '../Screens/pix'
import Pay from '../Screens/pay'
import Stratum from '../Screens/stratum'


const Tab = createBottomTabNavigator()
export default function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home"
          } else if (route.name === "Pay") {
            iconName = focused ? "briefcase" : "briefcase"
          }else if (route.name === "Stratum") {
            iconName = focused ? "file-text" : "file-text"
          }

          return <FeatherIcon name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: "#7200E3",
        tabBarInactiveTintColor: "#000",
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false, tabBarLabel: "Home" }} />
      <Tab.Screen name="Pay" component={Pay} options={{ headerShown: false, tabBarLabel: "Pay" }} />
      <Tab.Screen name="Stratum" component={Stratum} options={{ headerShown: false, tabBarLabel: "Pay" }} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBarLabel: {
    display: 'none'
  },
})
