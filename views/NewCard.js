import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import StyledTextInput from '../components/StyledTextInput';
import Button from '../components/Button';
import { addNewCard } from '../actions';
import { addCardToDeck } from '../utils/api';

const NewCard = ({ route, navigation, dispatch }) => {
  const { id } = route.params;

  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const isBtnDisabled = () => {
    return !question.length || !answer.length
  }

  const addCard = () => {
    const card = {question, answer};
    dispatch(addNewCard(id, card));
    addCardToDeck(id, card)
    navigation.navigate('Deck', {id})
  }

  return (
    <View style={styles.container}>
      <StyledTextInput
        label="Question"
        value={question}
        placeholder="e.g. What is a component?"
        onChange={setQuestion}
        style={styles.inputBox}
      />

      <StyledTextInput
        label="Answer"
        value={answer}
        placeholder="e.g. Component let's you split UI."
        onChange={setAnswer}
      />

      <Button
        text="Add"
        onPress={addCard}
        disabled={isBtnDisabled()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    flex: 1,
    padding: 16,
  },
  inputBox: {
    marginBottom: 20,
  },
})

export default connect()(NewCard);
