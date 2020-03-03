import { RECEIVE_DECKS, ADD_NEW_DECK, ADD_NEW_CARD } from "../actions";

export default function decks (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
      }
    case ADD_NEW_DECK:
      return {
        ...state,
        ...action.deck,
      }
    case ADD_NEW_CARD:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          questions: state[action.id].questions.concat([action.card])
        }
      }
    default:
      return state
  }
}
