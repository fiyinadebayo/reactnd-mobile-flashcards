# React NanoDegree Project: Mobile Flashcards (React Native)

This is a mobile application (Android and iOS) that allows users to study collections of flashcards. The app will allow users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.

### Requirements
* Node JS `12.16.1`
* NPM `6.13.4`
* Yarn `1.15.2`

## Getting Started
This project was bootstrapped with [Create React Native App](https://reactnative.dev/blog/2017/03/13/introducing-create-react-native-app).

## Setup
### Install dependencies
`npm install` or `yarn install`

### Run the app locally
`npm start` or `yarn start` <br>

Run an Android emulator or iPhone simulator by following the instructions in the terminal or on your device by scanning the QR code in Expo app.


Allow users to create a deck which can hold an unlimited number of cards.
Allow users to add a card to a specific deck.
The front of the card should display the question.
The back of the card should display the answer.
Users should be able to quiz themselves on a specific deck and receive a score once they're done.
Users should receive a notification to remind themselves to study if they haven't already for that day.

## Functionalities
##### A. Deck List
On the landing view, a list of decks are displayed (or a helper text if empty) with the number of cards in each deck.

##### B. View Deck
When a deck is tapped, details of the deck is displayed including the title, number of cards in the deck, an option to start a quiz and an option to add a new question (card) to the deck.

##### C. Quiz
Tap "Start A Quiz" to quiz yourself on a specific deck. Quiz view displays a card question and an option to view the answer. It provides a "Correct" and "Incorrect" button. When quiz is complete, the percentage correct is displayed.

##### D. Add Deck
You can add new deck by tapping "Add Deck" on the navigation bar. Add by entering the title for the new deck.

##### E. Add New Card (question)
On deck view, tap Add card. Enter the card question and card answer.

## Learn More

You can learn more in the [Create React Native App documentation](https://reactnative.dev/blog/2017/03/13/introducing-create-react-native-app).

To learn React, check out the [React documentation](https://reactjs.org/).
