import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { connect } from 'react-redux';
import { addNewDeck } from '../actions';
import { saveDeckTitle } from '../utils/api';
import StyledTextInput from '../components/StyledTextInput';
import Button from '../components/Button';
import StyledText from '../components/StyledText';

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
    navigation.navigate('Deck', {id: title})
  }

  return (
    <View style={styles.container}>
      <StyledText style={styles.header}>
        What is the title of your new deck?
      </StyledText>

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
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16
  },
  header: {
    fontSize: 24,
    marginVertical: 20,
  },
})

export default connect()(NewDeck);
