import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { favoriteDrink, removeDrink, showHeart, hideHeart } from '../actions';
import { connect } from 'react-redux';

const styles = {
  heading: {
    paddingBottom: '1rem',
    paddingBottom: '1rem',
    display: 'flex',
    alignItems: 'center',

  },
  heart: {
    height: '1.5rem',
    fill: 'red',
    marginRight: '.5rem',
    cursor: 'pointer'
  },
  pinkHeart: {
    height: '1.5rem',
    fill: 'pink',
    marginRight: '.5rem',
    cursor: 'pointer'
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
      if (measurement && measurement.length > 0 && ingredientArray[i] && ingredientArray[i].length > 0) {
        return (
          <div key={i} style={{ fontWeight: 500 }}>
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
                    style={styles.heart}
                    onClick={() => this.removeDrink(id)}
                  >
                    <svg style={{ height: '1.5rem' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32c-5.15-4.67-8.55-7.75-8.55-11.53 0-3.08 2.42-5.5 5.5-5.5 1.74 0 3.41.81 4.5 2.09 1.09-1.28 2.76-2.09 4.5-2.09 3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54l-1.45 1.31z" />
                    </svg>
                  </span>
                  :
                  <span

                    style={styles.pinkHeart}
                    onClick={() => this.favorite(drink)}>
                    <svg style={{ height: '1.5rem' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32c-5.15-4.67-8.55-7.75-8.55-11.53 0-3.08 2.42-5.5 5.5-5.5 1.74 0 3.41.81 4.5 2.09 1.09-1.28 2.76-2.09 4.5-2.09 3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 6.86-8.55 11.54l-1.45 1.31z" />
                    </svg>
                  </span>
              }
              <span>{drink.strDrink}</span>
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