import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: ['s-Bmw', 's-Honda', 's-Audi']
    }
  }
  render() {
    // console.log(this.state.cars);
    return (
      <div className="App">
        <header className="App-header">
        <ul>{this.state.cars.map(function(item, i) {
          return <li> {item} </li>
        })}</ul>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <p>Prop Number is = {this.props.propNumber}</p>
        <p>Prop String is = {this.props.propString}</p>
        <p>Prop Object is = {this.props.propObject.obj1}</p>
        <p>Cars names are = </p>
        <Parent testProperties="dfdfd" />
      </div>
    );
  }
}

App.propTypes = {
  propObject: PropTypes.object,
  propString: PropTypes.string,
  propNumber: PropTypes.number
}

App.defaultProps = {
  propNumber: 3,
  propString: "I am a prop string",
  propObject: {
    obj1: "I am obj 1",
    obj2: "I am obj 2",
    obj3: "I am obj 3"
  }
}



class Parent extends Component {
  render(){
    console.log(this.props);
    return (
      <div>
        <p>Just some info from Parent Component</p>
        <Cars msg="cars are cool" modal="123" />
      </div>
    )
  }
}


class Cars extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <p>I am from Cars Component</p>
        <p>{this.props.msg}</p>
      </div>
    )
  }
}


export default App;
