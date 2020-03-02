import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DeckList from './views/DeckList';
import NewDeck from './views/NewDeck';
import Deck from './views/Deck';
import Quiz from './views/Quiz';
import NewCard from './views/NewCard';

const Tab = createBottomTabNavigator();
const DeckStack = createStackNavigator();

const DeckStackScreens = () => {
  return (
    <DeckStack.Navigator>
      <DeckStack.Screen name="Decks" component={DeckList} />
      <DeckStack.Screen name="Deck" component={Deck} />
      <DeckStack.Screen name="Quiz" component={Quiz} />
      <DeckStack.Screen name="New Card" component={NewCard} />
    </DeckStack.Navigator>
  )
}

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Decks') {
            iconName = focused ? 'cards' : 'cards-outline';
          } else if (route.name === 'New Deck') {
            iconName = 'credit-card-plus';
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'orangered',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Decks" component={DeckStackScreens} />
      <Tab.Screen name="New Deck" component={NewDeck} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
