import { AsyncStorage } from "react-native";

const MF_DECK_KEY = 'MobileFlashcards:decks'

export function getDecks () {
  return AsyncStorage.getItem(MF_DECK_KEY)
    .then((results) => {
      return results === null ? {} : JSON.parse(results)
    })
}

export function getDeck (id) {
  return AsyncStorage.getItem(MF_DECK_KEY)
    .then(results => {
      const data = JSON.parse(results);
      return data[id]
    })
}

export function saveDeckTitle (title) {
  return AsyncStorage.mergeItem(MF_DECK_KEY, JSON.stringify({
    [title]: {
      title,
      questions: []
    }
  }))
}

export function addCardToDeck (title, card) {
  return AsyncStorage.getItem(MF_DECK_KEY)
    .then(results => {
      const data = JSON.parse(results);
      data[title].questions = data[title].questions.concat([card])
      AsyncStorage.setItem(MF_DECK_KEY, JSON.stringify(data))
    })
}
