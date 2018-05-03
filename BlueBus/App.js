import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { updateClock } from './haverford-timer';

export default class App extends React.Component {
	constructor() {
      super()
      this.state = {
         myText: "This is a placeholder text"
	  }
   }
    render() {
		return (
		  <View style={styles.container}>
			<Text>
				   {this.state.myText}
			</Text>
		  </View>
    );
  }
  
   getData = () => {
      this.setState({myText: updateClock()})
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
