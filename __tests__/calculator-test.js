/** @jsx React.DOM */
jest.dontMock('../calculator.js');

    var React = require('react');
    var addOns = require('react/addons');
    var TestUtils =  addOns.TestUtils;   
    var theCalcModule = require('../calculator.js');
    var buttonModule = require('../button.js');
    var theKeyboardModule = require('../keyboard.js');
    var theResultField = require('../ResultField.js');

describe('Calculator', function() {
  it('Rendered', function() {
     
    var theCalc = TestUtils.renderIntoDocument( <theCalcModule /> );

     expect(theCalc.getDOMNode().textContent).toEqual('React.JS Calculator using JSX');
 
  });
});

describe('Button', function() {
  it('Rendered', function() {
     
    var buttonModule = TestUtils.renderIntoDocument( <buttonModule /> );

     expect(buttonModule.getDOMNode().textContent).toEqual('button');
 
  });
});

describe('Calculator', function() {
  it('Rendered', function() {
     
    var theKeyboardModule = TestUtils.renderIntoDocument( <theKeyboardModule /> );

     expect(theKeyboardModule.getDOMNode().textContent).toEqual('1');
 
  });
});

describe('theResultField', function() {
  it('Rendered', function() {
     
    var theResultField = TestUtils.renderIntoDocument( <theResultField /> );

     expect(theResultField.getDOMNode().textContent).toEqual('');
 
  });
});