import React from 'react';

//material-ui
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

//react-scroll
import { scroller } from 'react-scroll';

const SideDrawer = ({open, onClose}) => {

    const scrollToElement = (element) => {
        scroller.scrollTo(
            element,
            {
                diration: 1000,
                delay: 500,
                smooth: true,
                offset: -80,
            },
        );
        onClose()
    }
    
  return (
    <Drawer
        open={open}
        onClose={onClose}
        anchor="right"
    >
        <List
            component="nav"
            style={{
                color: '#fff',
                backgroundColor: '#2f2f2f',
                height: '100%'
            }}
        >
            <ListItem
                button
                onClick={() => scrollToElement('Featured',)}
            >
                Featured
            </ListItem>

            <ListItem
                button
                onClick={() => scrollToElement('VenueNfo')}
            >
                Venue NFO
            </ListItem>

            <ListItem
                button
                onClick={() => scrollToElement('Highlights')}
            >
                Highlight
            </ListItem>

            <ListItem
                button
                onClick={() => scrollToElement('Pricing')}
            >
                Pricing
            </ListItem>

            <ListItem
                button
                onClick={() => scrollToElement('Location')}
            >
                Location
            </ListItem>
        </List>
    </Drawer>
  )
};

export default SideDrawer;
