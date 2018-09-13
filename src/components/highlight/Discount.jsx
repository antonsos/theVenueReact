import React, { Component } from 'react';

//react-reveal
import Slide from 'react-reveal/Slide';

//COMPONENTS
import Button from '../utils/Button';

export class Discount extends Component {

    state = {
        discountStart: 0,
        discountEnd: 30,
    };

    upDiscount = () => {
        let interval = setInterval(() => {
            if(this.state.discountStart < this.state.discountEnd) {
                this.setState((prevState) => ({
                    discountStart: prevState.discountStart + 1
                }))
            } else {
                clearInterval(interval)
            }
        }, 50);
    }

  render() {
    return (
      <div className="center_wrapper">
          <div className="discount_wrapper">
                <Slide
                    left
                    onReveal={this.upDiscount}
                >
                    <div className="discount_porcentage">
                        <span>{this.state.discountStart}%</span>
                        <span>off</span>
                    </div>
                </Slide>
                <Slide right>
                    <div className="discount_description">
                        <h3>Purchase tickets before 20th Nov</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, maxime id! Iusto iste est velit placeat maiores delectus dolorem? Illum fugit dolore animi, aspernatur voluptas magnam deleniti quo voluptate quisquam?
                        </p>
                        <Button
                            color='#fff'
                            bgc='#ffa800'
                            text='Purchase Tickets'
                            link='#'
                        />
                    </div>
                </Slide>
          </div>
      </div>
    )
  }
}

export default Discount
