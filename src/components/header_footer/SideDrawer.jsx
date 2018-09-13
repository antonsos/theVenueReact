import React from 'react';

//material-ui
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    drawer: {
        bacground: '#2f2f2f'
    }
};

const SideDrawer = ({open, onClose}) => {
  return (
    <Drawer
        open={open}
        onClose={onClose(false)}
        anchor="right"
    >
        <List
            component="nav"
            style={styles.drawer}
        >
            <ListItem
                button
                onClick={() => console.log('Featured')}
            >
                Featured
            </ListItem>

            <ListItem
                button
                onClick={() => console.log('Venue NFO')}
            >
                Venue NFO
            </ListItem>

            <ListItem
                button
                onClick={() => console.log('Highlight')}
            >
                Highlight
            </ListItem>

            <ListItem
                button
                onClick={() => console.log('Pricing')}
            >
                Pricing
            </ListItem>

            <ListItem
                button
                onClick={() => console.log('Location')}
            >
                Location
            </ListItem>
        </List>
    </Drawer>
  )
};

export default withStyles(styles)(SideDrawer);
