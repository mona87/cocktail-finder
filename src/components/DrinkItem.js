import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { favoriteDrink } from '../actions';
import { connect } from 'react-redux';

const styles = {

  heading: {
    paddingBottom: '1rem'
  },

  heart: {
    display: 'inline-block',
    marginRight: '1rem',
    color: 'pink',
    cursor: 'pointer'
  },

  redHeart: {
    display: 'inline-block',
    marginRight: '1rem',
    color: 'red',
    cursor: 'pointer'
  }
}

class DrinkItem extends Component {

  constructor(props) {
    super(props);


    this.state = {
      favorited: props.isFavorite
    }
  }

  componentWillReceiveProps(nextProps) {
    if(this.state.favorited  !== nextProps.favorited) {
      this.setState({favorited: false});
    }
  }

  favorite(drink) {
    if(this.state.favorited === false){
      this.props.favoriteDrink(drink);
      this.setState({favorited: true});
    } 
  }
  render() {
    let { drink } = this.props;
    console.log('state', this.state);
    console.log('props', this.props);
    return (
      <Paper className="paper" elevation={5}>
        <Card className="card" >
          <div className="text">
            <Typography style={styles.heading} variant="headline">
            {
              this.props.isFavorite ?  <div></div> :
                <span style={{color: this.state.favorited ? 'red' : 'pink' }} onClick={() => this.favorite(drink) }>&#10084;</span>
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

export default connect(null, { favoriteDrink })(DrinkItem);