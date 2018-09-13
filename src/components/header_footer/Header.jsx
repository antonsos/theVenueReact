import React, { Component } from 'react';

//material-ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

//COMPONENTS
import SideDrawer from './SideDrawer';

const styles = {
    appBar: {
        padding: '10px 0px',
        boxShadow: 'none',
    },
    iconButton: {
        color: 'inherit',
    },
}

export class Header extends Component {

    state = {
        drawerState: false,
        headerShow: false,
    }

    toggleDrawer = (value) => () => {
        this.setState({
            drawerState: value,
        })
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onWheelScrin)
    }

    onWheelScrin = (e) => {
        if(window.scrollY > 0) {
          this.setState({
            headerShow: true
          })
        } else {
          this.setState({
            headerShow: false
          })
        }
    
        console.log(window.scrollY)
    }

  render() {

    return (
      <AppBar
        position="fixed"
        style={{...styles.appBar, backgroundColor: this.state.headerShow ? '#2f2f2f' : 'transparent'}}
      >
        <Toolbar>
            <div className="header_logo">
                <div className="font_righteous header_logo_venue">The Venue</div>
                <div className="header_logo_title">Musical Events</div>
            </div>

            <IconButton
                aria-label="Menu"
                style={styles.iconButton}
                onClick={this.toggleDrawer(true)}
            >
                <MenuIcon/>
            </IconButton>

            <SideDrawer
                open={this.state.drawerState}
                onClose={this.toggleDrawer}
            />
        </Toolbar>
      </AppBar>
    )
  }
}

export default Header;
