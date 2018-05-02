import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
	constructor() {
      super()
      this.state = {
         myText: 'My Original Text',
		 anotherText: 'Another test'
      }
   }
    render() {
		return (
		  <View style={styles.container}>
			<Text onPress = {this.updateText}>
				   {this.state.myText}
			</Text>
			<Text onPress = {this.anotherUpdate}>
				{this.state.anotherText}
			</Text>
			<Text>Open up App.js to start working on your app!</Text>
			<Text>Changes you make will automatically reload.</Text>
			<Text>Shake your phone to open the developer menu.</Text>
		  </View>
    );
  }
  
   updateText = () => {
      this.setState({myText: 'My Changed Text'})
   }
   
    anotherUpdate = () => {
      this.setState({anotherText: 'Yet another changed text'})
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#abd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
