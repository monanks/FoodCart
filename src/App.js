import React, { Component } from 'react';
import './App.css';
import FoodShop from'./components/FoodShop';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

class App extends Component {
  render() {
    return (
      <div className="body">
        <MuiThemeProvider>
          <div>
            <div className="row">
              <Paper className="stylehead App-intro" zDepth={4}>Order Your Food</Paper>
            </div>
            <div className="row">
              <FoodShop/>
            </div>
          </div> 
        </MuiThemeProvider>
      </div> 
    );
  }
}

export default App;
