var NameBox = React.createClass({displayName: "NameBox",
  render: function() {
    return (
      React.createElement("input", {type: "text"}) 
    );
  }
});

var NameEval = React.createClass({displayName: "NameEval",
  render: function(){
    var first = this.props.firstName;
    var last = this.props.lastName;
    var message = "";
    if((first == "Bryan" && last == "Holdt") || 
        (first == "Jordan" && last == "Dashel")){
      message = first + " " + last + " is awesome!"
    } else {
      message = "You are not awesome."
    }
    return (
      React.createElement("h2", null, message)  
    )
  }
});

var Container = React.createClass({displayName: "Container",
  render: function(){
    return(
      React.createElement("div", null, 
        React.createElement("h1", null, "Awesome?"), 
        React.createElement(NameEval, {firstName: "Jordan", lastName: "Dashel"}), 
        React.createElement(NameBox, null), 
        React.createElement(NameBox, null)
      )
    );
  }
})

React.render(
    React.createElement(Container, null),
   document.getElementById('names')
);
