//import liraries
import React, { Component } from 'react';
import {TouchableOpacity } from 'react-native';


import Icon from 'react-native-vector-icons/Ionicons';
// create a component
class DrawerButton extends Component {
    toggleMenu=()=>{
        this.props.navigation.toggleDrawer();
    };
    render() {
        return (
            <TouchableOpacity onPress={this.toggleMenu} style={{paddingHorizontal:10}}>
                    <Icon
                    name="ios-menu"
                    size={26}
                    />
            </TouchableOpacity>
        );
    }
}

//make this component available to the app
export default DrawerButton;
