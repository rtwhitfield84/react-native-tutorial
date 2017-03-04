//import react library
var Moment = require('moment');
import React, {Component} from 'react';
import {View, AppRegistry, Text, StyleSheet} from 'react-native';
var DayItem = require('./src/day-item');

//create a react component
var Weekdays = React.createClass({
  render: function() {
    return <View style={styles.container}>
      {this.days()}
    </View>
  },
  days: function() {
    var daysItems = [];
    for (var i = 0; i < 7; i++) {
      var day = Moment().add(i, 'days').format('dddd');
      daysItems.push(
        <DayItem day={day} daysUntil={i} />
        )
    }

      return daysItems
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

