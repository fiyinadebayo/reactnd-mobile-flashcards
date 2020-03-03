import React, { useEffect } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { getDecks } from '../utils/api';
import { receiveDecks } from '../actions';

const DeckList = ({ navigation, dispatch, decks }) => {
  useEffect(() => {
    getDecks().then(d => dispatch(receiveDecks(d)))
  }, [])

  const renderDecks = ({item}) => (
    <TouchableOpacity onPress={() => navigation.navigate('Deck')}>
      <View>
        <Text>
          { item.title }
        </Text>

        <Text>
          { item.cards } Cards
        </Text>
      </View>
    </TouchableOpacity>
  )

  if (!Object.keys(decks).length) {
    return (
      <View>
        <Text>There are no card decks. Tap "New Deck" to get started.</Text>
      </View>
    )
  }

  return (
    <View>
      <FlatList
        data={decks}
        renderItem={renderDecks}
      />

      <Button
        title="Go to Deck"
        onPress={() => navigation.navigate('Deck')}
      />
    </View>
  )
}

const styles = StyleSheet.create({});

const mapStateToProps = (decks) => {
  const formatDecks = Object.keys(decks).map(key => {
    return {
      key,
      title: decks[key].title,
      cards: decks[key].questions.length
    }
  });

  return {
    decks: formatDecks
  }
}

export default connect(mapStateToProps)(DeckList);
