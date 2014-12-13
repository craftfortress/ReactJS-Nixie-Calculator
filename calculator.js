  /** @jsx React.DOM */
  
    

  
  var ResultField = React.createClass({
    render: function(){
      return (  <input type="text" maxlength="5" value={this.props.value} readonly/> )
    }
  });
  
  var Calculator = React.createClass({
    getInitialState: function(){
      return {value: "0"};
    },
    
    onKeyPress: function(val){
      var theInput = this.state.value + val.toString();
      if(theInput.length>10){
        theInput = theInput.substring(0,10);
      }
      this.setState({value:theInput});
    },
    onReset: function(val){ 
      this.setState({value: 0});
    }
  ,
    onCalculate: function(){
      console.log('calculate')
      var theInput = this.state.value;
      if(theInput.length>10){
        theInput = theInput.substring(0,10);
      }
      this.setState({value:  eval(theInput) });
    },
    
    render: function(){
      return ( 
        <div className="Panel"> 
        <h2>React.JS Calculator using JSX</h2>
           <ResultField value={this.state.value} />
           <KeyBoard onKeyPress={this.onKeyPress}  onReset={this.onReset} onCalculate={this.onCalculate} />
        </div>
      )
    }
  });
  
  React.renderComponent(<Calculator />, document.body)



exports = Calculator;
 