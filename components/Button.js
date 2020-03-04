import React from 'react';
import { TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import StyledText from './StyledText';

const { width } = Dimensions.get('screen');

const Button = ({ text, onPress, style, textStyle, disabled }) => {
  const disabledStyle = disabled ? {backgroundColor: '#ddd', borderColor: 'transparent'} : {};
  const disabledText = disabled ? {color: 'gray'} : {};

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.button, style, disabledStyle]}>

      <StyledText style={[styles.text, textStyle, disabledText]}>
        { text }
      </StyledText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'orangered',
    borderRadius: 5,
    padding: 16,
    marginVertical: 16,
    width: width*0.45,
  },
  text: {
    color: '#fff'
  },
})

export default Button;
