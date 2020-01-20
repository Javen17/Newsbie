import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './components/screens/HomeScreen'
import SearchScreen from './components/screens/SearchScreen'


const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen,  navigationOptions: {headerShown: false,}},
  Search: {screen: SearchScreen,   navigationOptions: {headerShown: false,}},
});

const App = createAppContainer(MainNavigator);


export default App;
