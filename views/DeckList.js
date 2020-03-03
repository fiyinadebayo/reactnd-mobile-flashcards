import React, { useEffect } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import { getDecks } from '../utils/api';

const DeckList = ({ navigation }) => {
  useEffect(() => {
    getDecks().then(decks => console.log('Decks: ', decks))
  })

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
