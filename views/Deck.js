import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import StyledText from '../components/StyledText';
import Button from '../components/Button';
import { clearLocalNotification, setLocalNotification } from '../utils/notifications';

const Deck = ({ navigation, deck, id }) => {
  const startQuiz = () => {
    navigation.navigate('Quiz', {id})
    clearLocalNotification()
      .then(setLocalNotification)
  }

  return (
    <View style={styles.container}>
      <StyledText style={styles.title}>
        { deck.title }
      </StyledText>

      <StyledText style={styles.subTitle}>
        { deck.questions.length } {deck.questions.length === 1 ? 'Card' : 'Cards'}
      </StyledText>

      <Button
        text="Start Quiz"
        onPress={startQuiz}
        disabled={!deck.questions.length}
        style={styles.quizBtn}
        textStyle={styles.quizBtnText}
      />

      <Button
        text="Add Card"
        onPress={() => navigation.navigate('New Card', {id})}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 32,
  },
  subTitle: {
    color: 'gray',
    marginVertical: 16,
  },
  quizBtn: {
    backgroundColor: 'transparent',
    borderColor: 'orangered',
    borderWidth: 1,
  },
  quizBtnText: {
    color: 'orangered',
  },
});

const mapStateToProps = (state, {route}) => {
  const { id } = route.params;

  return {
    id,
    deck: state[id],
  }
}

export default connect(mapStateToProps)(Deck);
