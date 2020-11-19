import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import facebook from './screens/facebook.js';
import instagram from './screens/instagram.js';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { render } from 'react-dom';

export default class App extends React.Component() {
  render(){
    return (
    <AppContainer/>
   );
  }
}

const TabNavigator = createBottomTabNavigator({
  FacebookAccount:{screen:facebook},
  InstaAccount:{screen:instagram},
})

const AppContainer = createAppContainer(TabNavigator);
