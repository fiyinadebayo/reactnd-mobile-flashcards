import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import Button from '../components/Button';
import StyledText from '../components/StyledText';

const Quiz = ({ id, deck, navigation }) => {
  const total = deck.questions.length
  const questions = deck.questions

  const [position, setPosition] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState({
    correct: 0,
    incorrect: 0
  });

  const markCorrect = () => {
    setScore({
      ...score,
      correct: score.correct+1
    })
    setPosition(position+1)
  }

  const markIncorrect = () => {
    setScore({
      ...score,
      incorrect: score.incorrect+1
    })
    setPosition(position+1)
  }

  const resetQuiz = () => {
    setPosition(0)
    setShowAnswer(false)
    setScore({
      correct: 0,
      incorrect: 0,
    })
  }

  if (position <= total-1) {
    return (
      <ScrollView
        contentContainerStyle={styles.containerProps}
        style={styles.container}>
        <StyledText style={styles.progress}>
          {position + 1} of {total}
        </StyledText>

        { !showAnswer ? (
          <StyledText style={styles.cardText}>
            {questions[position].question}
          </StyledText>
        ) : (
          <StyledText style={styles.cardText}>
            {questions[position].answer}
          </StyledText>
        )}

        <TouchableOpacity onPress={() => setShowAnswer(!showAnswer)}>
          <StyledText style={styles.showAnswer}>
            Show Answer
          </StyledText>
        </TouchableOpacity>

        <Button
          text="Correct"
          onPress={markCorrect}
          style={styles.correctBtn}
        />

        <Button
          text="Incorrect"
          onPress={markIncorrect}
          style={styles.incorrectBtn}
        />
      </ScrollView>
    )
  } else {
    return (
      <View style={styles.container}>
        <StyledText>Result</StyledText>
        <StyledText>correct: {score.correct} {Math.round(score.correct/total*100)}%</StyledText>
        <StyledText>incorrect: {score.incorrect}</StyledText>

        <View>
          <Button
            text="Restart Quiz"
            onPress={resetQuiz}
          />

          <Button
            text="Back To Deck"
            onPress={() => navigation.navigate('Deck', {id})}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    flex: 1,
    padding: 16,
  },
  containerProps: {
    alignItems: 'center',
  },
  progress: {
    color: 'gray',
  },
  cardText: {
    fontSize: 32,
    marginVertical: 16,
    textAlign: 'center',
  },
  showAnswer: {
    color: 'orangered',
    paddingVertical: 8,
    textDecorationLine: 'underline',
  },
  correctBtn: {
    backgroundColor: '#008000'
  },
  incorrectBtn: {
    backgroundColor: '#d12528'
  },
})

const mapStateToProps = (state, {route}) => {
  const { id } = route.params;

  return {
    id,
    deck: state[id],
  }
}

export default connect(mapStateToProps)(Quiz);
