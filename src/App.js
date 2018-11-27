import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Result from './Components/Result/Result.js'
import DimensionsInput from './Components/DimensionsInput/DimensionsInput.js'

class App extends Component {

  state = {
    msg: "Please enter the dimensions of your triangle.",
    side1: 0,
    side2: 0,
    side3: 0
  }

  triangleType = (side1, side2, side3) => {
    if (this.state.side1 === this.state.side2 && side1 === this.state.side3 && this.state.side2 === this.state.side3) {
        this.setState({
          msg: "Equilateral"
        }) 
      } else if (this.state.side1 === this.state.side2 || this.state.side1 === this.state.side3 || this.state.side2 === this.state.side3) {
        this.setState({
          msg: "Isoclese"
        })   
      } else if (this.state.side1 !== this.state.side2 && this.state.side1 !== this.state.side3 && this.state.side2 !== this.state.side3) {
        this.setState({
          msg: "Scalene"
        }) 
    }
  }

  isTriangle = () => {

  }

  handleChange = (e) => {
    e.preventDefault()

    console.log(e)
  }

  render() {
    return (
      <div className="App">
        {this.state.msg}
        <DimensionsInput />
        <div>
        <Result side1={this.state.side1} side2={this.state.side2} side3={this.state.side3}/>
        </div>
      </div>
    );
  }
}

export default App;
