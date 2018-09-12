import React, { Component } from 'react';
import { connect } from 'react-redux';
import DrinkItem from './DrinkItem';


class DrinkList extends Component {
  render() {
    console.log('props', this.props);
    const { drinks } = this.props.recipes;
    return (
        <div>
          { drinks && drinks.length > 0 ? drinks.map((drink, index) => {
            return (
              <DrinkItem 
              key={index} 
              drink={drink}
              isFavorite={false}
              favoriteButton={true} />
            )
           })
         : false }
        </div>
    );
  }
}

function mapStateToProps(state){
  return state;
}

export default  connect(mapStateToProps, null)(DrinkList);

