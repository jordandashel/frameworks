var NameBox = React.createClass({displayName: "NameBox",
  handleChange: function(event){
    this.setState({value: this.state.value})
  },

  render: function() {
    return (
      React.createElement("input", {type: "text"}) 
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
      message = "You are not awesome."
    }
    return (
      React.createElement("div", null, 
        React.createElement("h2", null, message), 
        React.createElement(NameBox, null), 
        React.createElement(NameBox, null)
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
