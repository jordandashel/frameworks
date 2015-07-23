var NameBox = React.createClass({
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
      <form>
        <input type="text" value={this.props.last} ref="lastName" onChange={this.handleChange}/> 
      </form>
    );
  }
});

var NameEval = React.createClass({

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
      <div>
        <h2>{message}</h2>  
        <NameBox 
          text={this.state.first}
          isLast=""
          onUserInput={this.handleUserInput}
        />
        <NameBox
          text={this.state.first}
          isLast="true"
          onUserInput={this.handleUserInput}
        />
      </div>
    )
  }
});

var Container = React.createClass({
  render: function(){
    return(
      <div>
        <h1>Awesome?</h1>
        <NameEval firstName="Jordan" lastName="Dashel" />
      </div>
    );
  }
})

React.render(
    <Container />,
   document.getElementById('names')
);
