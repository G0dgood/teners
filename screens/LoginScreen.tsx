import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert
} from 'react-native';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';
import { windowHeight } from '../utils/Dimentions';
import * as Haptics from 'expo-haptics';
import { MaterialIndicator, } from 'react-native-indicators';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '../css/colorsIndex';

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [Loading, setLoading] = useState(false);



  const handleLoginValidation = (email: string | any[]) => {
    if (email.length > 10) {
      return true; // Email is valid
    } else {
      Alert.alert(
        'Invalid Email',
        'Email must be at least 11 characters long.',
        [
          { text: 'OK', onPress: () => setLoading(false) },
        ]

      );
      return false; // Email is invalid
    }
  };

  const handleLogin = async () => {
    setLoading(true); // Start loading indicator

    if (handleLoginValidation(email)) {
      // Valid email (more than 10 characters)
      try {
        navigation.replace('Password'); // Pass data to next page (if applicable)
        setLoading(false); // Stop loading indicator
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy); // Haptic feedback
      } catch (error) {
        // Handle login errors (e.g., invalid credentials, network issues)
        console.error('Login error:', error);
        Alert.alert(
          'Login Error',
          'An error occurred during login. Please try again.',
          [
            { text: 'OK', onPress: () => setLoading(false) },
          ]
        );
      } finally {
        setLoading(false); // Ensure loading indicator is stopped even on errors
      }
    }
  };




  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoheader}>
        <Ionicons name="arrow-back" size={22} color={colors.black} />
        <Text style={styles.logo}>Account and Settings</Text>
      </View>
      <View style={styles.logoheaderContainer}>
        <Text style={styles.text}>Enter your email</Text>

        <FormInput
          labelValue={email}
          // @ts-ignore
          onChangeText={(userEmail: React.SetStateAction<undefined>) => setEmail(userEmail)}
          placeholderText="Email"
          iconType="user"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />



        <TouchableOpacity
          style={styles.buttonContainer} onPress={handleLogin}>
          {Loading ? <MaterialIndicator color='white' size={20} />
            : <Text style={styles.buttonText}>Continue</Text>}
        </TouchableOpacity>

        <View style={styles.orButton}>
          <View style={styles.line}></View>
          <Text style={styles.navButtonText}>OR</Text>
          <View style={styles.line}></View>
        </View>


        <View style={styles.socialButtonContainer}>
          <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
          />
          <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="facebook"
            icon={true}
          />

        </View>

        <View style={styles.teams}>
          <Text style={styles.teamsText}>If you are creating a new account, Teams & condition and Privacy Policy will apply</Text>
        </View>
      </View>


    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  teamsText: {
    textAlign: 'center',
    fontSize: 12,
    color: colors.text,
    fontFamily: "Poppins_500Medium"
  },
  teams: {
    marginTop: 70,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "95%",

  },

  socialButtonContainer: {
    flexDirection: 'column',
    width: '100%',
    marginTop: 20,
    gap: 20,
  },
  line: {
    flex: 1,
    height: 0.9,
    backgroundColor: colors.text,
  },
  logoheaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },

  logoheader: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
  },


  buttonContainer: {
    marginTop: 30,
    width: '100%',
    height: windowHeight / 22,
    backgroundColor: colors.yellow,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 20,
  },
  buttonText: {
    fontSize: 18,
    color: colors.black,
  },
  container: {

    padding: 20,
    paddingTop: 30
  },
  logo: {
    fontSize: 18,
    color: colors.black,
  },
  text: {
    fontSize: 18,
    marginTop: 30,
    marginBottom: 30,
    color: colors.black,
  },
  navButton: {
    marginTop: 15,
  },
  orButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    gap: 10,
    marginTop: 80,
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
  },


});

