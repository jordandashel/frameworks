/*
React.render(
    <h1>Awesome?</h1>,
    document.getElementById('example')
);
*/
var NameBox = React.createClass({displayName: "NameBox",
  render: function() {
    return (
      React.createElement("input", {type: "text"}) 
    );
  }
});

React.render(
   React.createElement(NameBox, null),
   document.getElementById('names')
);
