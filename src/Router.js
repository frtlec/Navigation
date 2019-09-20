import { createStackNavigator, createAppContainer,createDrawerNavigator } from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import ContactScreen from "./screens/ContactScreen";
//import AboutModal from './screens/AboutModal';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Detail: DetailScreen
  }
);
const ContactStack=createStackNavigator({
  Contact:{
    screen:ContactScreen
  }
})
const Drawer=createDrawerNavigator({
  Home:{
    screen:HomeStack
  },
  Contact:{
    screen:ContactStack
  }
 
});

export default AppContainer = createAppContainer(Drawer);
