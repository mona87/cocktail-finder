import React, { Component } from 'react';
import { connect } from 'react-redux';
import DrinkItem from './DrinkItem';
import CircularProgress from '@material-ui/core/CircularProgress';


class DrinkList extends Component {

  render() {
    const { drinks } = this.props.recipes;
    return (
        <div>
         <h2 className="title">Cocktail Search</h2>
          { drinks && drinks.length > 0 ? drinks.map((drink, index) => {
            return (
              <DrinkItem 
              key={index} 
              drink={drink}
              id={drink.idDrink}
              favoriteButton={true}
              />
            )
           })
         : this.props.showMsg ?
          <div className="not-found">Search for a drink to get started. </div> : 
          <div className="not-found">No drinks were found. </div>
          }
        </div>
    );
  }
}

function mapStateToProps(state){
  return state;
}


export default connect(mapStateToProps, null)(DrinkList);

