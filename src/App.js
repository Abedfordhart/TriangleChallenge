import React, { Component } from 'react';
import './App.css';
import Result from './Components/Result/Result.js'
import DimensionsInput from './Components/DimensionsInput/DimensionsInput.js'
import Button from './Components/Button/Button.js'

class App extends Component {

  state = {
    msg: "Please enter the dimensions of your triangle.",
    result: "",
    side1: null,
    side2: null,
    side3: null,
    showingResult: false
  } 

  triangleType = (side1, side2, side3) => {
    if (this.isTriangle(side1,side2,side3)) {
      if (side1 === side2 && side1 === side3 && side2 === side3) {
          this.setState({
            result: "Equilateral"
          }) 
        } else if (side1 === side2 || side1 === side3 || side2 === side3) {
          this.setState({
            result: "Isosceles"
          })   
        } else if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
          this.setState({
            result: "Scalene"
          }) 
      }
    } else {
      this.setState({result: "That's not a triangle, please try again with different dimensions."})
    }
    this.setState({showingResult: true})
  }

  isTriangle = (side1, side2, side3) => {
    if ((!isNaN(side1) && !isNaN(side2) && !isNaN(side3)) && (side1 !== null && side2 !== null && side3 !== null) && (side1 > 0 && side2 > 0 && side3 > 0)) {
      return true
    } else {
      return false
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }

  handleSubmit = () => {
    this.triangleType(this.state.side1, this.state.side2, this.state.side3)
  }

  render() {
    const showingResult = this.state.showingResult
    let result

    if (showingResult) {
      result = <Result side1={this.state.side1} side2={this.state.side2} side3={this.state.side3} result={this.state.result}/>
    } else {
      result = <div></div>
    }

    return (
      <div className="App">
        <div className="triangle-type">
          <div className="msg">
            {this.state.msg}
          </div>
          <DimensionsInput handleChange={this.handleChange}/>
          <Button name={"Submit"} handleSubmit={this.handleSubmit}/>
            {result}
        </div>
      </div>
    );
  }
}

export default App;
