import React, { Component } from "react";
import { StyleSheet, Text, View, Button,Image,TouchableOpacity} from "react-native";

class TitleLogo extends Component{
  render(){
    return(
      <View style={{  flex: 1,
        justifyContent: 'center',
        alignItems: 'center'}}>

         <Image
       style={{width:38, height:38}}
      source={require('../assets/header-icon.png') } />
      </View>
  
    )
  }
}
export default class HomeScreen extends Component {
  static navigationOptions=({navigation})=>{
    return{
      headerTitleStyle: { 
        textAlign:"center", 
        flex:1 
    },
      headerTitle:<TitleLogo />,
      headerRight:(
        <TouchableOpacity 
        style={{marginRight:10}} 
        onPress={()=>navigation.navigate('Modal')}
        ><Text>About</Text>
        </TouchableOpacity>
      )
    };
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Button title="Contact Screen" 
        onPress={() => navigate("Contact",{title:'Contact'})} />
 
        <Button title="Haber 1" 
        onPress={() => navigate("Detail",{title:'Kadiköyde Yangın'})} />
        <Button title="Haber 2" 
         onPress={() => navigate("Detail",{title:'Fenerbahçe Namağlup'})} />
              <Button title="Haber 3" 
         onPress={() => navigate("Detail")} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
