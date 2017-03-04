//import
import React, {Component} from 'react';
import {Text} from 'react-native';  

//create component
var DayItem = React.createClass({
	render: function() {
		return <Text style={this.style()}>
			{this.props.day}
		</Text>	
	},
	style: function() {
		return {
			color: this.color(),
			fontSize: this.fontSize(),
			lineHeight: this.lineHeight()
		}
	},
	color: function() {
		var opacity = 1 / this.props.daysUntil;
		return 'rgba(0, 0, 0, '+ opacity + ')';
	},
	fontSize: function() {
		return 60 - 6 * this.props.daysUntil;
	},
	lineHeight: function() {
		return 70 - 4 * this.props.daysUntil;
	}
});


//export this module
module.exports = DayItem;