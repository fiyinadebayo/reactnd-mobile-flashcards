import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native';
import { connect } from 'react-redux';

const Deck = ({ navigation, deck, id }) => {
  return (
    <View>
      <Text>
        { deck.title }
      </Text>

      <Text>
        { deck.questions.length } Cards
      </Text>

      <Button
        title="Start Quiz"
        onPress={() => navigation.navigate('Quiz', {id})}
      />

      <Button
        title="Add Card"
        onPress={() => navigation.navigate('New Card', {id})}
      />
    </View>
  )
}

const styles = StyleSheet.create({});

const mapStateToProps = (state, {route}) => {
  const { id } = route.params;

  return {
    id,
    deck: state[id],
  }
}

export default connect(mapStateToProps)(Deck);
