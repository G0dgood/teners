import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTabParamList, RootTabScreenProps } from '../types';
import useColorScheme from '../hooks/useColorScheme';
import Colors from '../constants/Colors';
import { Platform, View, Image, Text, StatusBar } from 'react-native';
import { colors } from '../css/colorsIndex';
import * as Haptics from 'expo-haptics';
import { useNavigation } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import PasswordScreen from '../screens/PasswordScreen';
import Menu from '../screens/Menu';
import Cart from '../screens/Cart';
import { Entypo, AntDesign, Ionicons, FontAwesome } from '@expo/vector-icons';
import ProductDetails from '../components/ProductDetails';

const BottomTab = createBottomTabNavigator<RootTabParamList>();
const Stack = createNativeStackNavigator();

function RootNavigator() {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();

  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{
      headerShown: false,
      headerStyle: { backgroundColor: Colors[colorScheme].TopTab },
      headerTintColor: Colors[colorScheme].headerTintColor,
      headerTitleStyle: { fontWeight: 'bold', fontFamily: 'Inter_500Medium', },
    }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Password" component={PasswordScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />

    </Stack.Navigator>
  );
}




function BottomTabNavigator() {
  const colorScheme = useColorScheme();



  return (
    <BottomTab.Navigator
      initialRouteName="Menu"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.accent_orange,
        tabBarInactiveTintColor: "#858585",
        tabBarStyle: {
          backgroundColor: colors.white,
          paddingTop: 10,
          height: Platform.OS === 'android' ? 60 : 80,
          paddingBottom: Platform.OS === 'android' ? 10 : 20,
        },
      }}>

      <BottomTab.Screen
        name="Menu"
        component={Menu}
        options={() => ({
          title: 'Menu',
          tabBarIcon: ({ color, size }) => <AntDesign name="appstore1" color={color} size={size} />
        })}
      />
      <BottomTab.Screen
        name="Cart"
        component={Cart}
        options={() => ({
          title: 'Cart',
          tabBarIcon: ({ color, size }) => <Ionicons name="bag-handle" color={color} size={30} />,
        })}
      />

    </BottomTab.Navigator>

  );
}
export default RootNavigator;




