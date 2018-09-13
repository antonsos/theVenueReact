import React from 'react';

//icon
import icon_calindar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';

//react-reveal
import Zoom from 'react-reveal/Zoom';

const VenuNfo = () => {
  return (
    <div className="bck_black">
        <div className="center_wrapper">
            <div className="vn_wrapper">
                <Zoom left>
                    <div className="vn_item">
                        <div className="vn_outer">
                            <div className="vn_inner">
                                <div className="vn_icon_square bck_red">

                                </div>
                                <div
                                    className="vn_icon"
                                    style={{
                                        backgroundImage: `url(${icon_calindar})`
                                    }}
                                ></div>
                                <div className="vn_title">
                                    Date & Time Event
                                </div>
                                <div className="vn_desc">
                                    1 Dec 2018
                                    <div> @10:00 pm </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Zoom>
                <Zoom 
                    right
                    delay={500}
                >
                    <div className="vn_item">
                        <div className="vn_outer">
                            <div className="vn_inner">
                                <div className="vn_icon_square bck_yellow">
                                </div>
                                <div
                                    className="vn_icon"
                                    style={{
                                        backgroundImage: `url(${icon_location})`
                                    }}
                                ></div>
                                <div className="vn_title">
                                    Event Location
                                </div>
                                <div className="vn_desc">
                                    345 Speer Street
                                    <div>Oakland, CA 9835</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Zoom>
            </div>
        </div>
    </div>
  )
}

export default VenuNfo;
