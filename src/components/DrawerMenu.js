//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";

// create a component
class DrawerMenu extends Component {
    navigateToScreen=(route)=>()=>{
        this.props.navigation.navigate(route)
    };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.content}>
          <TouchableOpacity onPress={this.navigateToScreen('Home')} style={styles.menuItem}>
            <Text style={styles.itemText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.navigateToScreen('Contact')} style={styles.menuItem}>
            <Text style={styles.itemText}>Contact</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.navigateToScreen} style={styles.menuItem}>
            <Text style={styles.itemText}>Other</Text>
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.footer}>
          <Text style={styles.footerText}>My Navigation App</Text>
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    backgroundColor: "#fff"
  },
  menuItem:{
      backgroundColor:'#e1e1e1',
      padding:10,
  },
  itemText:{
      fontSize:13,
      color:'#333'
  },
  footer: {
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    paddingVertical: 10
  },
  footerText: {
    textAlign: "center",
    color: "#999",
    fontSize: 11
  }
});

//make this component available to the app
export default DrawerMenu;
