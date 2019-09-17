import React, {Component} from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';

export default class HomeScreen extends Component {
	render() {
    const {navigate,push,goBack,getParam}=this.props.navigation;
    const title=getParam('title','Default Title');
		return (
			<View style={styles.container}>
				<Text>{title}</Text>
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