import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import { connect } from 'react-redux';
import { setRecipes, showMsg } from '../actions';
import SearchMenu from './SearchMenu';
import {withRouter} from 'react-router-dom';




const styles = {
  search: {
    width: '100%'
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
    width: '100%'
  },
};

class SearchRecipes extends Component {

  constructor() {
    super();

    this.state = {
      drinkName: '',
    }
  }

  nextPath(path) {
    console.log(this.props);
    this.props.history.push(path);
  }

  componentDidMount() {
  }

  search() {
    this.props.showMsg(false);

    let { drinkName } = this.state;
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`;
    console.log(drinkName);
    fetch(url, {
      method: 'GET'
    }).then(response => response.json())
      .then(json => this.props.setRecipes(json));

      this.nextPath('/'); 

  }

  render() {
    return (
        <AppBar
          style={{ backgroundColor: "#fff" }}
        >
          <Toolbar  >
            <div style={{display:'flex', alignItems: 'center', width: '100%'}}>
              <SearchMenu />
              <div className={styles.searchIcon}> </div>
              <div style={styles.search}>

                <Input
                  style={styles.input}
                  placeholder="Search for margarita, gin, ect..."
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
    );
  }
}


export default connect(null, { setRecipes, showMsg }) (withRouter(SearchRecipes));