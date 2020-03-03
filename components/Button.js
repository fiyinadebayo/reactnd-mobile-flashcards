import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>
        { text }
      </Text>
    </TouchableOpacity>
  )
}

export default Button;
