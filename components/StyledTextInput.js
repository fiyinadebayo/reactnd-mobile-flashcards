import React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet
} from 'react-native';

const StyledTextInput = ({ label, value, placeholder, onChange, autoCapitalize }) => {
  return (
    <View>
      {label && <Text>{label}</Text>}

      <TextInput
        style={styles.input}
        onChangeText={text => onChange(text)}
        value={value}
        placeholder={placeholder}
        autoCapitalize={autoCapitalize || 'sentences'}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
  }
})

export default StyledTextInput;
