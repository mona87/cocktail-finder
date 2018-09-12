import React, { Component } from 'react';
// import TextField from "material-ui/TextField";
// import RaisedButton from "material-ui/RaisedButton";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import { connect } from 'react-redux';
import { setRecipes } from '../actions';


const styles = {
  search: {
    // position: 'relative',
    // borderRadius: '2rem',
    // backgroundColor: '#fff',
    // opacity: 0.5,
    // marginRight: '0.5rem',
    // marginLeft: '2rem',

    // [theme.breakpoints.up('sm')]: {
    //   marginLeft:'3rem',
    //   width: 'auto',
    // },
  },
  // searchIcon: {
  //   width: theme.spacing.unit * 9,
  //   height: '100%',
  //   position: 'absolute',
  //   pointerEvents: 'none',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  input: {

    //   paddingTop: theme.spacing.unit,
    //   paddingRight: theme.spacing.unit,
    //   paddingBottom: theme.spacing.unit,
    //   paddingLeft: theme.spacing.unit * 10,
    //   transition: theme.transitions.create('width'),
    //   width: '100%',
    //   [theme.breakpoints.up('md')]: {
    //     width: 200,
    //   },
  },
};

class SearchRecipes extends Component {

  constructor() {
    super();

    this.state = {
      drinkName: 'margarita'
    }
  }

  search() {
 
    let { drinkName } = this.state;
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`;
    console.log(drinkName);
    fetch(url, {
      method: 'GET'
    }).then(response => response.json())
      .then(json => this.props.setRecipes(json));

  }
  render() {
    return (
      <form>
        <AppBar
          style={{ backgroundColor: "#fff" }}
        >
          <Toolbar >
            <div className={styles.search}>
              <div className={styles.searchIcon}>

              </div>
              <div style={styles.search}>

                <Input
                  style={styles.input}
                  placeholder="Search…"
                  disableUnderline
                  onChange={event => this.setState({ drinkName: event.target.value })}
                  onKeyPress={event => {
                    if (event.key === 'Enter') {
                      event.preventDefault();
                      this.search()
                    }
                  }}
                />
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </form>
    );
  }
}

export default connect(null, { setRecipes })(SearchRecipes);