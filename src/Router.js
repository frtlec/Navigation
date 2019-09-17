import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import AboutModal from './screens/AboutModal';

const MainStack = createStackNavigator(
  {
    Home: HomeScreen,
    Detail: DetailScreen
  },
  {
    initialRouteName: "Home",
    headerLayoutPreset: "center",
    defaultNavigationOptions: {
      headerBackTitle: null,
      headerStyle: {
        backgroundColor: "#f3f3f3"
      },
      headerTintColor: "#0f0f0f",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const ModalStack=createStackNavigator({
   Main:MainStack,
   Modal:AboutModal

},{
    mode:'modal',
    headerMode:'none'
});

export default AppContainer = createAppContainer(ModalStack);
