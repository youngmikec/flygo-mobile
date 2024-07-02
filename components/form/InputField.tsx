import React, { FC, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Colors } from '../../constants/Colors';
import { KeyboardTypeOptions } from 'react-native';

type Props = {
  value: string;
  onChange: (e: any) => void;
  label: string;
  inputType: KeyboardTypeOptions | 'password';
  placeholder?: string;
  iconName?: string;
}

const InputField:  FC<Props> = ({value, onChange, label, inputType, placeholder, iconName }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.formContainer}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>{label}</Text>
        <View style={[styles.inputBox, { 
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center'
          }]}
        >
          <Icon name={iconName ? iconName : 'mail-outline'} size={24} color={Colors.black} />
          <TextInput
            style={styles.inputField}
            keyboardType={inputType === 'password' ? 'default' : inputType}
            value={value}
            secureTextEntry={((inputType === 'password') && showPassword) ? false : true}
            placeholder={placeholder}
            onChange={(e) => onChange(e)}
          />
          {
            inputType === 'password' &&
            <TouchableOpacity style={styles.passBtn}
              onPress={() => setShowPassword(!showPassword)}>
              <Text style={{color: Colors.white}}>{showPassword ? 'Hide' : 'Show'}</Text>
            </TouchableOpacity>
          }
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    marginVertical: 5
  },
  inputContainer: {
    width: '100%',
    height: 'auto',
    marginTop: 10
  },
  inputBox: {
    width: '100%',
    height: 45,
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    color: Colors.black
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.black,
    marginBottom: 5
  },
  inputField: { 
    flexGrow:1,
    paddingLeft: 10, 
    color: Colors.black,
    textAlign: 'left',
  },
  passBtn: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
    borderWidth: 1,
    color: Colors.white,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    textAlign: 'center',
  },
});

export default InputField;