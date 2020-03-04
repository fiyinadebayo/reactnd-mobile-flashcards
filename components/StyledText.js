import React from 'react';
import { Text, StyleSheet } from 'react-native';

const StyledText = ({ children, style }) => {
  return (
    <Text style={[styles.text, style]}>
      { children }
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#333',
    fontSize: 16
  }
})

export default StyledText;
