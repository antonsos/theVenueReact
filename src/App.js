import React, { Component } from 'react';

//resurse css file
import './resources/styles.css';

//COMPONENTS
import Header from './components/header_footer/Header';
import Featured from './components/featured';

class App extends Component {

  state = {
    scroll: false
  }

  render() {
    return (
      <div style={{height: 1500}} onWheel={this.onWheelScrin}>
        <Header />
        <Featured />
      </div>
    );
  }
}

export default App;
