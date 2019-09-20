import React from "react";
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import ContactScreen from "./screens/ContactScreen";
//import AboutModal from './screens/AboutModal';

import Icon from "react-native-vector-icons/Ionicons";
import DrawerButton from "./components/DrawerButton";
const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
  
  },
  Detail: {
    screen: DetailScreen,
  
  }
},{
  defaultNavigationOptions: ({ navigation }) => ({
    headerLeft: <DrawerButton navigation={navigation} />
  })
}
);
const ContactStack = createStackNavigator({
  Contact: {
    screen: ContactScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: <DrawerButton navigation={navigation} />
    })
  }
});
const Drawer = createDrawerNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        drawerLabel: "Anasayfa",
        drawerIcon: ({ tintColor }) => (
          <Icon name="ios-home" size={22} color={tintColor} />
        )
      }
    },
    Contact: {
      screen: ContactStack,
      navigationOptions: {
        // drawerLockMode:'locked-closed', //contact sayfasında drawer kapatıldı.
        drawerIcon: ({ tintColor }) => (
          <Icon name="ios-contact" size={22} color={tintColor} />
        )
      }
    }
  },
  {
    drawerPosition: "left",
    drawerWidth: 160,
    contentOptions: {
      activeTintColor: "#fff",
      inactiveTintColor: "#d03932",
      activeBackgroundColor: "#d03932",
      inactiveBackgroundColor: "#fff",
      itemStyle: {
        flexDirection: "row-reverse"
      }
    }
  }
);

export default AppContainer = createAppContainer(Drawer);
