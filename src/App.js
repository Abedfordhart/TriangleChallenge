import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <form>
          <label>
            Side 1:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
          <label>
            Side 1:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
          <label>
            Side 1:
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
