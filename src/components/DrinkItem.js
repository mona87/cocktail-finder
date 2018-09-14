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

  constructor(props) {
    super(props);
  }


  favorite(drink) {
    this.props.showHeart(drink.idDrink, true);
    this.props.favoriteDrink(drink);
  }

  removeDrink(id) {
    this.props.hideHeart(id, false);
    this.props.removeDrink(id);
  }

  render() {
    let { drink, showHeartArray } = this.props;

    return (
      <Paper className="paper" elevation={5}>
        <Card className="card" >
          <div className="text">
            <Typography style={styles.heading} variant="headline">
              {

                showHeartArray.some(heart => heart.id === drink.idDrink) ?
                  <span
                    style={{ color: 'red' }}
                    onClick={() => this.removeDrink(this.props.id)}
                    className="heart">&#10084;
                  </span>
                  :
                  <span
                    className="heart"
                    style={{ color: 'pink' }}
                    onClick={() => this.favorite(drink)}>&#10084;
                  </span>
              }
              {drink.strDrink}
            </Typography>
            <Typography variant="subheading" color="textSecondary">
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