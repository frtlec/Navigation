import React, {Component} from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';

export default class HomeScreen extends Component {
	render() {
    const {navigate,push,goBack}=this.props.navigation;
		return (
			<View style={styles.container}>
				<Text>Detail</Text>
        <Button title="go to detail page"
                onPress={()=>push('Detail')}
                />
                <Button 
                title="go back"
                onPress={()=>goBack()}
                
                />
			</View>
		);
	}
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }
  });