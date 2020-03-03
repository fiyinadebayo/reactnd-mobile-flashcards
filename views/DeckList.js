import React, { useEffect } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { getDecks } from '../utils/api';
import { receiveDecks } from '../actions';

const DeckList = ({ navigation, dispatch, decks }) => {
  useEffect(() => {
    getDecks()
      .then(decks => dispatch(receiveDecks(decks)))
  })

  if (!Object.keys(decks).length) {
    return (
      <View>
        <Text>There are no card decks. Tap "New Deck" to get started.</Text>
      </View>
    )
  }

  return (
    <View>
      <Text>
        Deck {JSON.stringify(decks)} List
      </Text>

      <Button
        title="Go to Deck"
        onPress={() => navigation.navigate('Deck')}
      />
    </View>
  )
}

const styles = StyleSheet.create({});

const mapStateToProps = (decks) => {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList);
