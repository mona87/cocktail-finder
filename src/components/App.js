import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import SearchRecipes from './SearchRecipes';
import DrinkList from './DrinkList';
import '../styles/index.css';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider  >
        <div className="app-wrapper" >
          <SearchRecipes />
          <DrinkList />
        </div>
      </MuiThemeProvider >
    )
  }
}

export default App;