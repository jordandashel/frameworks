var NameBox = React.createClass({displayName: "NameBox",
  render: function() {
    return (
      React.createElement("input", {type: "text"}) 
    );
  }
});

var Container = React.createClass({displayName: "Container",
  render: function(){
    return(
      React.createElement("div", null, 
      React.createElement("h1", null, "Awesome?"), 
      React.createElement(NameBox, null)
      )
    );
  }
})

React.render(
    React.createElement(Container, null),
   document.getElementById('names')
);
