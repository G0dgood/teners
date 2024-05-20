import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import * as React from 'react';
import { ColorSchemeName, View, Image, Dimensions, SafeAreaView, ActivityIndicator } from 'react-native';
import { Asset } from 'expo-asset';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppStack from './AppStack';
import * as SplashScreen from 'expo-splash-screen';
import {
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
  useFonts,
} from '@expo-google-fonts/poppins';
import { useEffect } from 'react';
// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {

  const [appIsReady, setAppIsReady] = React.useState(false);

  const [user, setUser] = React.useState('');



  const [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });




  useEffect(() => {
    userInfo()
  }, [])



  const userInfo = async () => {
    try {
      const info: any = await AsyncStorage.getItem('teners-info');
      setUser(info);
    }
    catch (e) {
      console.log(`isLoggedIn in error ${e}`)
    }
  }

  if (!fontsLoaded || !appIsReady) {
    // Display the loading screen until the app is ready
    return (
      <NavigationContainer
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <AppStack />
      </NavigationContainer>
    );
  }
}

