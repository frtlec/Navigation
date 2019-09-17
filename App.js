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
      headerStyle:{
        backgroundColor:'#f3f3f3'
      },
      headerTintColor:'#0f0f0f',
      headerTitleStyle:{
        fontWeight:'bold'
      }
  }
});

const AppContainer = createAppContainer(AppNavigator);

