import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';

const Deck = ({ navigation }) => {
  return (
    <View>
      <Text>
        Deck View
      </Text>

      <Button
        title="Start Quiz"
        onPress={() => navigation.navigate('Quiz')}
      />

      <Button
        title="Add Card"
        onPress={() => navigation.navigate('New Card')}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default Deck;
