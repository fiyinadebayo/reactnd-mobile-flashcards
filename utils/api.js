import { AsyncStorage } from "react-native";

const MF_DECK_KEY = 'MobileFlashcards:decks'

export function getDecks () {
  return AsyncStorage.getItem(MF_DECK_KEY)
    .then((results) => {
      return results === null ? {} : JSON.parse(results)
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
