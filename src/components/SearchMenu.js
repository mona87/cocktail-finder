import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  list: {
    width: 250,
    color: '#000',

  }
};

class SearchMenu extends Component {

  state = {
    left: false,
  };
  

  toggleDrawer = (open) => () => {
    this.setState({
      left: open,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="menu">
        <Button onClick={this.toggleDrawer(true)}> <MenuIcon /></Button>
        <Drawer open={this.state.left} onClose={this.toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            <div className={classes.list}>
              <List  className="link"><Link to="/">Home</Link></List>
              <Divider />
              <List  className="link"><Link to="/favorites">Favorites</Link></List>
              <Divider />
            </div>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default withStyles(styles)(SearchMenu);