import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { favoriteDrink, removeDrink, showHeart, hideHeart } from '../actions';
import { connect } from 'react-redux';

const styles = {

  heading: {
    paddingBottom: '1rem'
  }
}

class DrinkItem extends Component {

  favorite(drink) {
    this.props.showHeart(drink.idDrink, true);
    this.props.favoriteDrink(drink);
  }

  removeDrink(id) {
    this.props.hideHeart(id, false);
    this.props.removeDrink(id);
  }

  getIngredients(drink) {
    let ingredientArray = [];
    let measureArray = [];

    Object.keys(drink).map((key, i) => {
      // console.log(key)
      let val = key.substring(0, key.length - 1);
      // console.log(val)
      if (val === 'strIngredient' && drink[key] && drink[key].length > 0) {
        ingredientArray.push(drink[key])
      } else if (val === 'strMeasure' && drink[key] && drink[key].length > 0) {
        measureArray.push(drink[key])
      }
      return null
    });

    return measureArray.map((measurement, i) => {
      if(measurement && measurement.length > 0 && ingredientArray[i] && ingredientArray[i].length > 0 ){
        return (
          <div key={i} style={{fontWeight: 500}}>
            <span >{measurement} </span><span>{ingredientArray[i]}</span>
          </div>
        )
      }
    })
  }

  render() {
    let { drink, showHeartArray, id } = this.props;
    // console.log(drink);
    return (
      <Paper className="paper" elevation={5}>
        <Card className="card" >
          <div className="text">
            <Typography style={styles.heading} variant="headline">
              {
                showHeartArray.some(heart => heart.id === drink.idDrink) ?
                  <span
                    style={{ color: '#FF0000' }}
                    onClick={() => this.removeDrink(id)}
                    className="heart">&#10084;
                  </span>
                  :
                  <span
                    className="heart"
                    style={{ color: '#FFB6C1' }}
                    onClick={() => this.favorite(drink)}>&#10084;
                  </span>
              }
              {drink.strDrink}
            </Typography>
            <Typography variant="subheading" color="textSecondary">
              <div style={{ marginBottom: '1rem' }}>
                {this.getIngredients(drink)}
              </div>
              {drink.strInstructions}
            </Typography>
          </div>
          <CardMedia
            className="image"
            image={drink.strDrinkThumb}
          />
        </Card>
      </Paper>
    );
  }
}

const mapStateToProps = state => {
  return {
    favoriteDrinksArray: state.favoriteDrinks,
    showHeartArray: state.showHeart
  };
};

export default connect(mapStateToProps, { favoriteDrink, removeDrink, showHeart, hideHeart })(DrinkItem);