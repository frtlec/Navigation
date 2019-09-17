import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';

export default class App extends Component {
  render() {
    return (
			<AppContainer />
    );
  }
}


const AppNavigator = createStackNavigator({
  Home:HomeScreen,
  Detail:DetailScreen
},{
  initialRouteName:'Home',
  defaultNavigationOptions:{
      headerBackTitle:null,
      header
  }
});

const AppContainer = createAppContainer(AppNavigator);

