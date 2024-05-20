import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimentions';
import { colors } from '../css/colorsIndex';
import { Google } from '../assets/svg/Google';


const SocialButton = ({
  buttonTitle,
  btnType,
  icon
}: any) => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer} >
      <View style={styles.iconWrapper}>
        {icon ? <FontAwesome name={btnType} style={styles.icon} size={22} /> : <Google />}

      </View>
      <View style={styles.btnTxtWrapper}>
        <Text style={styles.buttonText}>{buttonTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 14,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 3,
    borderWidth: 0.6,
    borderColor: colors.text,
    borderTopLeftRadius: 20,
  },
  iconWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  icon: {
    fontWeight: 'bold',
    color: "#3563A1",
  },
  btnTxtWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: colors.black,
    fontFamily: "Poppins_400Regular"
  },
});
