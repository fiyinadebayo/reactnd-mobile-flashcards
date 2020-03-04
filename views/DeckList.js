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
import StyledText from '../components/StyledText';

const DeckList = ({ navigation, dispatch, decks }) => {
  useEffect(() => {
    getDecks().then(d => dispatch(receiveDecks(d)))
  }, [])

  const renderDecks = ({item}) => (
    <TouchableOpacity onPress={() => navigation.navigate('Deck', {id: item.key})}>
      <View>
        <Text>
          { item.title }
        </Text>

        <Text>
          { item.cards } {item.cards === 1 ? 'Card' : 'Cards'}
        </Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      { Object.keys(decks).length ? (
        <View>
          <FlatList
            data={decks}
            renderItem={renderDecks}
          />
        </View>
      ) : (
        <View>
          <StyledText style={styles.noDecksText}>
            There are no card decks. Tap "New Deck" to get started.
          </StyledText>
        </View>
      ) }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  noDecksText: {
    color: 'gray',
    textAlign: 'center',
  },
});

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
