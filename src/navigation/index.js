import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'

import HomeScreen from '../screens/Home';
import SettingsScreen from '../screens/Setting';
import DetailsScreen from '../screens/Detail';
import ComentsScreen from '../screens/Coment';
import NewFeedsScreen from '../screens/NewFeed';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// const NewFeedStack = () => {
//   return (
//     <Stack.Navigator initialRouteName="MainTab">
//       <Stack.Screen name="NewFeed" component={NewFeed} />
//       <Stack.Screen name="Coment" component={ComentsScreen} />
//     </Stack.Navigator>
//   )
// }

const MainTab = () => {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home-outline'
                : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings-outline' 
              : 'settings-outline';
            }
            else if (route.name === 'Details') {
              iconName = focused 
              ? 'woman-outline' 
              : 'woman-outline';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Details" component={DetailsScreen} />
      </Tab.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="MainTab">
        <Stack.Screen name="MainTab" component={MainTab} options={{headerShown: false}} />
        <Stack.Screen name="NewFeed" component={NewFeedsScreen} />
        <Stack.Screen name="Coment" component={ComentsScreen} />
       

      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

export default App;
