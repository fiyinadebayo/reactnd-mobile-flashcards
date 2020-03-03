import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { connect } from 'react-redux';
import { addNewDeck } from '../actions';
import { saveDeckTitle } from '../utils/api';
import StyledTextInput from '../components/StyledTextInput';
import Button from '../components/Button';

const NewDeck = ({ dispatch, navigation }) => {
  const [title, setTitle] = useState('');

  const createDeck = () => {
    const newDeck = {
      [title]: {
        title,
        questions: [],
      }
    }
    dispatch(addNewDeck(newDeck))
    saveDeckTitle(title)
    setTitle('')
    navigation.navigate('Decks')
  }

  return (
    <SafeAreaView>
      <View>
        <Text>What is the title of your new deck?</Text>
        <StyledTextInput
          label="Title"
          value={title}
          placeholder="e.g. React Native"
          onChange={setTitle}
          autoCapitalize="words"
        />

        <Button
          text="Create Deck"
          onPress={createDeck}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default connect()(NewDeck);
