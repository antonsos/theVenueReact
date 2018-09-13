import React, { Component } from 'react';

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
        <Featured />
        <VenueNfo />
        <Highlights />
        <Pricing />
        <Location />
        <Footer />
      </div>
    );
  }
}

export default App;
