import React, { Component } from 'react';

//COMPONENTS
import Button from '../utils/Button';

//react-reveal
import Zoom from 'react-reveal/Zoom';

export class Pricing extends Component {

    state = {
        cards: [
            {
                pricing: 100,
                position: 'Balcony',
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde illum et eius, consequatur architecto labore numquam non vero molestias!',
                link: '#',
                delay: 550,
            },
            {
                pricing: 150,
                position: 'Medium',
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde illum et eius, consequatur architecto labore numquam non vero molestias!',
                link: '#',
                delay: 50,
            },
            {
                pricing: 250,
                position: 'Star',
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde illum et eius, consequatur architecto labore numquam non vero molestias!',
                link: '#',
                delay: 550,
            },
        ]
    };

    showBoxes = () => (
        this.state.cards.map(({
            pricing, 
            position,
            desc,
            link,
            delay,
            }, index) => (
            <Zoom
                key={index}
                delay={delay}
            >
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${pricing}</span>
                            <span>{position}</span>
                        </div>
                        <div className="pricing_description">
                            <span>{desc}</span>
                        </div>
                        <div className="pricing_buttons">
                            <Button
                                color='#fff'
                                bgc='#ffa800'
                                text='Purchase'
                                link={link}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
    )

  render() {
    return (
      <div className="bck_black">
          <div className="center_wrapper pricing_section">
              <h2>Pricing</h2>

              <div className="pricing_wrapper">
                  {this.showBoxes()}
              </div>
          </div>
      </div>
    )
  }
}

export default Pricing;
