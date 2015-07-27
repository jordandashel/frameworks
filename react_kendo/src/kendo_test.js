var TreeView = React.createClass({
    	componentDidMount: function() {
		$(this.refs.treeview.getDOMNode()).kendoTreeView({
			dataSource: this.props.dataSource
		});
	},
	render: function(){
		return <div ref="treeview"></div>;
	}
});

React.render(
	<TreeView dataSource={[{ text: "Root", items: [{ text: "Child" }]}]} />,
	document.getElementById('example')
);
