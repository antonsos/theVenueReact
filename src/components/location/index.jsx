import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d174240.73478860463!2d82.77397748698695!3d54.98449468246701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42dfe5e190cc4d97%3A0x9b3a0673e1d3e985!2z0J3QvtCy0L7RgdC40LHQuNGA0YHQuiwg0J3QvtCy0L7RgdC40LHQuNGA0YHQutCw0Y8g0L7QsdC7Lg!5e0!3m2!1sru!2sru!4v1536820967783" 
            width="100%" 
            height="550px" 
            frameborder="0" 
            allowfullscreen></iframe>

        <div className="location_tag">
            <div>Location</div>
        </div>
    </div>
  )
}

export default Location;
