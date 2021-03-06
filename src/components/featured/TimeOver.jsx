import React, { Component } from 'react'

export class TimeOver extends Component {
    state = {
        deadline: 'Dec, 1, 2018',
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    };

    getTimeOut = (deadline, interval) => {
        const time = Date.parse(deadline) - Date.parse(new Date());
            
        if(time < 0) {
            clearTimeout(interval);
        } else {
            const seconds = Math.floor((time / 1000) % 60);
            const minutes = Math.floor((time / 1000 / 60) % 60);
            const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
            const days = Math.floor((time / (1000 * 60 * 60 * 24)));

            this.setState({
                seconds,
                minutes,
                hours,
                days,
            })
        }
    };

    componentDidMount() {
        setInterval(() => this.getTimeOut(this.state.deadline), 1000);
    }
  render() {
    return (
      <div className="countdown_wrapper">
        <div className="countdown_top">
            Event start in
        </div>
        <div className="countdown_bottom">
            <div className="countdown_item">
                <div className="countdown_time">
                    {this.state.days}
                </div>
                <div className="countdown_tag">
                    Day
                </div>
            </div>
            <div className="countdown_item">
                <div className="countdown_time">
                    {this.state.hours}
                </div>
                <div className="countdown_tag">
                    Hs
                </div>
            </div>
            <div className="countdown_item">
                <div className="countdown_time">
                    {this.state.minutes}
                </div>
                <div className="countdown_tag">
                    Min
                </div>
            </div>
            <div className="countdown_item">
                <div className="countdown_time">
                    {this.state.seconds}
                </div>
                <div className="countdown_tag">
                    Sec
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default TimeOver
