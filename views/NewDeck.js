import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { addNewDeck } from '../actions';
import { saveDeckTitle } from '../utils/api';

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
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => setTitle(text)}
          value={title}
          placeholder="e.g. React Native"
        />

        <TouchableOpacity onPress={createDeck}>
          <Text>Create Deck</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default connect()(NewDeck);
