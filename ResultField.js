  /** @jsx React.DOM */
  
  var Button = React.createClass({
  
    handleClick: function(){
      if(this.props.onMouseDown)
        this.props.onMouseDown(this, this.props.value);
    },
    
    render: function(){
      return <button onMouseDown={this.handleClick}>{this.props.value}</button>
    }
  });
