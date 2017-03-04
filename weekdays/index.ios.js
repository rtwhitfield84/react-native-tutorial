//import react library
import React, {Component} from 'react';
import {View, AppRegistry, Text, StyleSheet} from 'react-native';

var DAYS = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//create a react component
var Weekdays = React.createClass({
  render: () => {
    return <View style={styles.container}>
      <Text>
        Days of the week:
      </Text>
    </View>
  }
});

//style the react component
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',//height
    alignItems: 'center'//width
  }
});

//show the react component on the screen
AppRegistry.registerComponent('weekdays', function() {
  return Weekdays
});

