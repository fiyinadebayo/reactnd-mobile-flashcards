import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';

const Deck = ({ navigation, route }) => {
  const { key } = route.params;

  return (
    <View>
      <Text>
        Deck View - {key}
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
