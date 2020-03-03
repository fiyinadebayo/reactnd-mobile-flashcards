import { AsyncStorage } from "react-native";

const MF_DECK_KEY = 'MobileFlashcards:decks'

export function getDecks () {
  return AsyncStorage.getItem(MF_DECK_KEY)
    .then((results) => {
      return results === null ? {} : results
    })
}
