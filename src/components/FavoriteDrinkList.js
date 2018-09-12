import React, { Component } from 'react';
import { connect } from 'react-redux';
import DrinkItem from './DrinkItem';

class FavoriteDrinkList extends Component {
  render() {
    return (
      <div>
      <h4>Favorite drink</h4>
      <div>
        {this.props.favoriteDrinks.map((drink, index) => {
          return (
            <DrinkItem 
            key={index} 
            drink={drink}
            isFavorite={true}
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