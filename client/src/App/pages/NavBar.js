import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


class NavBar extends Component {
    render() {
      return (
        <div >
      <AppBar position="static" style={{"background-color":"#037ef3"}}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
          <img alt="Aiesec Logo" class="logo-img" src="https://cdn-expa.aiesec.org/assets/images/aiesec-logo-white-blue.svg" style={{width: "220px",
    "line-height": "100px"}} />
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
      );
    }
  }
  export default NavBar;