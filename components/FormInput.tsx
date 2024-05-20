import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimentions';
import { colors } from '../css/colorsIndex';


const FormInput = ({ labelValue, placeholderText, iconType, ...rest }: any) => {


  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="#666"
        {...rest}
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 10,
    width: '100%',
    height: windowHeight / 16,
    borderColor: colors.gray,
    borderRadius: 3,
    borderWidth: 1.3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    paddingRight: 40,
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Poppins_400Regular',
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
});
