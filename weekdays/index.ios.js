//import reat library
import React, {Component} from 'react';
import {View, AppRegistry, Text} from 'react-native';


//create a react component
var Weekdays = React.createClass({
  render: () => {
    return <View>
      <Text>
        Days of the week:
      </Text>
    </View>
  }
});


//show the react component on the screen
AppRegistry.registerComponent('weekdays', function() {
  return Weekdays
});

