import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

const DeckList = ({ navigation }) => {
  return (
    <View>
      <Text>
        Deck List
      </Text>

      <Button
        title="Go to Deck"
        onPress={() => navigation.navigate('Deck')}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default DeckList;
