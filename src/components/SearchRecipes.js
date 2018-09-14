import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import { connect } from 'react-redux';
import { setRecipes, showMsg } from '../actions';
import SearchMenu from './SearchMenu';
import {withRouter} from 'react-router-dom';




const styles = {
  search: {
    width: '100%',
    display: 'flex',
    height: '2.1rem',
    backgroundColor: 'rgba(grey, .5)',
    alignItems: 'center',
    borderRadius: '2rem',
    backgroundColor: 'rgba(130, 130, 130,.1)',
    paddingLeft: '1rem',
    maxWidth: '50rem',
    margin: 'auto'
  },
  searchIcon: {
    color: 'grey',
    marginRight: '1rem',
  },
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
          <Toolbar className="toolbar" >
            <div style={{display:'flex', alignItems: 'center', width: '100%'}}>
              <SearchMenu />
              <div style={styles.search}>
                <SearchIcon  style={styles.searchIcon}/>
                <Input
                  style={styles.input}
                  placeholder="Search..."
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