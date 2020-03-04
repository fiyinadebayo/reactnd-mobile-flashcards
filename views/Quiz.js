import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import Button from '../components/Button';

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
      <View>
        <Text>
          {position + 1} of {total}
        </Text>

        { !showAnswer ? (
          <Text>
            {questions[position].question}
          </Text>
        ) : (
          <Text>
            {questions[position].answer}
          </Text>
        )}

        <TouchableOpacity onPress={() => setShowAnswer(!showAnswer)}>
          <Text>Show Answer</Text>
        </TouchableOpacity>

        <Button
          text="Correct"
          onPress={markCorrect}
        />

        <Button
          text="Incorrect"
          onPress={markIncorrect}
        />
      </View>
    )
  } else {
    return (
      <View>
        <Text>Result</Text>
        <Text>correct: {score.correct} {Math.round(score.correct/total*100)}%</Text>
        <Text>incorrect: {score.incorrect}</Text>

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

const styles = StyleSheet.create({})

const mapStateToProps = (state, {route}) => {
  const { id } = route.params;

  return {
    id,
    deck: state[id],
  }
}

export default connect(mapStateToProps)(Quiz);
