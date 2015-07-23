var NameBox = React.createClass({displayName: "NameBox",
  handleChange: function(){
    this.props.onUserInput(
        this.refs.last.getDOMNode().value,
        this.refs.first.getDOMNode().value
    );
  },

  getInitialState: function(){
    return {value: ""};
  },

  render: function() {
    var isLast = this.props.isLast;
    var value = "";
    if(isLast){
      value = this.props.last
    } else {
      value = this.props.first
    }
    return (
      React.createElement("form", null, 
        React.createElement("input", {type: "text", value: this.props.last, ref: "lastName", onChange: this.handleChange})
      )
    );
  }
});

var NameEval = React.createClass({displayName: "NameEval",

  getInitialState: function(){
    return {
      first: "",
      last: ""
    };
  },

  handleUserInput: function(first, last){
    this.setState({
      first: first,
      last: last
    });
  },

  render: function(){
    var first = this.state.first;
    var last = this.state.last;
    var message = "";
    if((first == "Bryan" && last == "Holdt") || 
        (first == "Jordan" && last == "Dashel")){
      message = first + " " + last + " is awesome!"
    } else {
      message = first + " " + last + " is not awesome"
    }
    return (
      React.createElement("div", null, 
        React.createElement("h2", null, message), 
        React.createElement(NameBox, {
          text: this.state.first, 
          isLast: "", 
          onUserInput: this.handleUserInput}
        ), 
        React.createElement(NameBox, {
          text: this.state.first, 
          isLast: "true", 
          onUserInput: this.handleUserInput}
        )
      )
    )
  }
});

var Container = React.createClass({displayName: "Container",
  render: function(){
    return(
      React.createElement("div", null, 
        React.createElement("h1", null, "Awesome?"), 
        React.createElement(NameEval, {firstName: "Jordan", lastName: "Dashel"})
      )
    );
  }
})

React.render(
    React.createElement(Container, null),
   document.getElementById('names')
);
