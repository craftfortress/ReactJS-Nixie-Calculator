  /** @jsx React.DOM */
  
  var KeyBoard = React.createClass({
    getInitialState: function(){
      return {
        buttons: [1, 2, 3, , "+",4, 5, 6,"-", 7, 8, 9, "*", 0, "C",  "/", "="]
       };
    },
    
    onClickHandler: function(obj, val){
      if(val === "="){
        if(this.props.onCalculate) this.props.onCalculate();
      }else if(val === "C"){
         if(this.props.onReset) this.props.onReset();
      }
      else{
        if(this.props.onKeyPress) this.props.onKeyPress(val);
      }
    },
    
    render: function(){
      var self = this;
      
      var buttons = this.state.buttons.map(function(val){
        return <Button value={val} onMouseDown={self.onClickHandler} />;
      });
      
      return (
        <div className="button-container">{buttons}</div>
      )
       
    }
  });