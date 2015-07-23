var NameBox = React.createClass({
  handleChange: function(){
    this.props.onUserInput(
        this.refs.name.getDOMNode().value
    );
  },

  render: function() {
    return (
      <form>
        <input type="text" value={this.props.name} ref="name" onChange={this.handleChange}/> 
      </form>
    );
  }
});

var NameEval = React.createClass({
  getInitialState: function(){
    return {
      name: ''
    };
  },

  handleUserInput: function(name){
    this.setState({
      name: name
    });
  },

  render: function(){
    return (
      <div>
        <h2>{getMessage(this.state.name)}</h2>
        <NameBox 
          text={this.state.name}
          onUserInput={this.handleUserInput}
        />
      </div>
    )
  }
});

getMessage = function(name){
  var message = "";
  if((name == "Bryan Holdt") || 
      (name == "Jordan Dashel")){
    message = name + " is awesome!"
  } else {
    message = name + " is not awesome"
  }
  return message;
}

var Container = React.createClass({
  render: function(){
    return(
      <div>
        <h1>Awesome?</h1>
        <NameEval />
      </div>
    );
  }
})

React.render(
    <Container />,
   document.getElementById('names')
);
