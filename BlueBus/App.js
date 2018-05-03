import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { updateClock } from './haverford-timer';

export default class App extends React.Component {
	constructor() {
      super()
      this.state = {
         myText: "This is a placeholder text",
		 i: 0,
		 isShowingText: true
	  };
	  setInterval(() => {
      this.setState(previousState => {
        return { i: previousState.i + 1 };
      });
    }, 1000);

   }
    render() {
		return (
		  <View style={styles.container}>
			<Text>
				   {this.state.i}
			</Text>
		  </View>
    );
  }
  
   getData = function() {
      this.setState({myText: updateClock()})
   }
   
   test = function(){
        if (this.timer>0) return;   // Already started
        this.timer = BackgroundTimer.setInterval(() => {
            // this will be executed every 200 ms
            // even when app is the the background
            this.setState({myText: this.i});
			this.i++;
        }, 1000);

   }
   updateText = () => {
      this.setState({myText: 'My Changed Text'})
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
