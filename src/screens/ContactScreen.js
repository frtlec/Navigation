//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';

// create a component
class ContactScreen extends Component {
    render() {
        const {goBack}=this.props.navigation;

        return (
            <View style={styles.container}>
                <Text>Contact Screen</Text>
                <Button 
              title="go back"
              onPress={()=>goBack(null)}
              
              />
            </View>
            
           
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

//make this component available to the app
export default ContactScreen;
