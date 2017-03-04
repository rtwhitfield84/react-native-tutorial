//import
import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';  

//create component
var DayItem = React.createClass({
	render: function() {
		return <Text style={styles.day}>
			{this.props.day}
		</Text>	
	}
});

//style component
var styles = StyleSheet.create({
	day: {
		fontSize: 18,
		color: '#0000FF'
	}
});

//export this module
module.exports = DayItem;