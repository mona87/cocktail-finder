import React, { Component } from 'react';
import { connect } from 'react-redux';
import DrinkItem from './DrinkItem';


class DrinkList extends Component {

  componentWillReceiveProps(nextProps, prevState) {
    console.log(this.props.favoriteDrinks);
    // this.props.favoriteDrinksArray.filter((drink, i) => {

    //   if(drink.idDrink === this.props.id){
    //     console.log('yep', this.props.id)
    //     this.setState({favorited: true});
    //   } else {
    //     this.setState({favorited: false});
    //   }
    //   });
  }
  render() {
    // console.log('props', this.props);
    const { drinks } = this.props.recipes;
    return (
        <div>
         <h2 className="title">Cocktail Finder</h2>
          { drinks ? drinks.map((drink, index) => {
            return (
              <DrinkItem 
              key={index} 
              drink={drink}
              id={drink.idDrink}
              favoriteButton={true} />
            )
           })
         : <div className="not-found">No drinks were found. </div> }
        </div>
    );
  }
}

function mapStateToProps(state){
  return state;
}


export default connect(mapStateToProps, null)(DrinkList);

