import React, { FC, JSX} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Colors } from '../constants/Colors';

type ButtonProps = {
  btnText: string;
  width?: any;
  height?: any;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
  onPress?: () => void;
  onLongPress?: () => void;
}

const AppButton: FC<ButtonProps> = ({
  btnText, 
  textColor, 
  bgColor, 
  width, 
  height,
  borderColor,
  onPress, 
  onLongPress
}): JSX.Element => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.btn, {
          backgroundColor: bgColor ? bgColor : Colors.primary,
          width: width,
          height: height ? height : 55,
          borderColor: borderColor ? borderColor : Colors.primary,
          borderWidth: borderColor ? 1 : 0
        }]}
        onPress={onPress}
        onLongPress={onLongPress}
      >
        <Text style={[styles.btnText, { color: textColor ? textColor : Colors.white }]}>{ btnText }</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15
  },
  btn: {
    opacity: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center'
  }
})

export default AppButton;