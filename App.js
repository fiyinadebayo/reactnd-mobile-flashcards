import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DeckList from './views/DeckList';
import NewDeck from './views/NewDeck';

const Tab = createBottomTabNavigator();

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
      <Tab.Screen name="Decks" component={DeckList} />
      <Tab.Screen name="New Deck" component={NewDeck} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
}
