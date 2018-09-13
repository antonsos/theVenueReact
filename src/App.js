import React, { Component } from 'react';

//react-scroll
import { Element } from 'react-scroll';

//resurse css file
import './resources/styles.css';

//COMPONENTS
import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueNfo from './components/venueNfo';
import Highlights from './components/highlight';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';

class App extends Component {

  state = {
    scroll: false
  }

  render() {
    return (
      <div>
        <Header />

        <Element name="Featured">
          <Featured />
        </Element>

        <Element name="VenueNfo">
          <VenueNfo />
        </Element>

        <Element name="Highlights">
          <Highlights />
        </Element>

        <Element name="Pricing">
          <Pricing />
        </Element>

        <Element name="Location">
          <Location />
        </Element>
        
        <Footer />
      </div>
    );
  }
}

export default App;
