var React = require('react');
var k = React.Kendo = require('react-kendo');

var splitterOptions = {
	orientation: 'horizontal',
	panes: [
	{ collapsible: false, size: '300px' },
	{ resizable: true }
	]
};
var treeOptions = { /* ,,, */ };
var gridOptions = { /* ,,, */ };

var app = React.createClass({displayName: "app",
	render: function() {
		return (
		React.createElement(k.Splitter, {options: splitterOptions}, 
			React.createElement(k.TreeView, {options: treeOptions}), 
			React.createElement(k.Grid, {options: gridOptions})
		)
		);
	}
});

React.render(
	React.createElement("h1", null, "Hello, World!"),
	document.getElementById('example')
);
