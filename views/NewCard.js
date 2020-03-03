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

  const addCard = () => {
    const card = {question, answer};
    dispatch(addNewCard(id, card));
    addCardToDeck(id, card)
    navigation.navigate('Deck', {id})
  }

  return (
    <View>
      <StyledTextInput
        label="Question"
        value={question}
        placeholder="e.g. What is a component?"
        onChange={setQuestion}
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
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default connect()(NewCard);
