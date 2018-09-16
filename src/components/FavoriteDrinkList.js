import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchRecipes from './SearchRecipes';
import DrinkItem from './DrinkItem';

class FavoriteDrinkList extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <SearchRecipes />
       <h2 className="title">Favorite Drinks</h2>
      <div>
        {this.props.favoriteDrinks.map((drink, index) => {
          return (
            <DrinkItem 
            key={index} 
            drink={drink}
            id={drink.idDrink}
            favoriteButton={false} />
          )
        })
        }
      </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    favoriteDrinks: state.favoriteDrinks
  }
}

export default connect(mapStateToProps, null)(FavoriteDrinkList);