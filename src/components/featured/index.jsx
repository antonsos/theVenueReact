import React from "react";

//COMPONENTS
import Carrusel from './Carrousel';
import TimeOver from './TimeOver';

//react-reveal
import Fade from 'react-reveal/Fade';

//style
const styles = {
  container: {
    position: "relative",
  }
};

const Featured = () => {
  return (
    <div style={styles.container}>

        <Carrusel />

      <div className="artist_name">
        <div className="wrapper">Ariana Grande</div>
      </div>

        <Fade
            delay={500}
            left
        >
            <TimeOver />
        </Fade>
    
    </div>
  );
};

export default Featured;
