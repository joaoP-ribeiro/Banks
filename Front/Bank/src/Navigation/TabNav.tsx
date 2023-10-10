import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet } from 'react-native'
import Home from '../Screens/home'
import FeatherIcon from 'react-native-vector-icons/Feather'


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
          } else if (route.name === "User") {
            iconName = focused ? "user" : "user"
          }

          return <FeatherIcon name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: "#7200E3",
        tabBarInactiveTintColor: "#000",
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBarLabel: {
    display: 'none'
  },
})
