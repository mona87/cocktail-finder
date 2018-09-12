import React, { Component } from 'react';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import SearchRecipes from './SearchRecipes';
import DrinkList from './DrinkList';
import FavoriteDrinkList from './FavoriteDrinkList';
import '../styles/index.css';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider  >
        <div className="app-wrapper" >
          <h2 className="title">Cocktail Finder</h2>
          <SearchRecipes />
          <DrinkList />
          <FavoriteDrinkList />
        </div>
      </MuiThemeProvider >
    )
  }
}

export default App;