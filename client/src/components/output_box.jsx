// Lowest level of the output box. For technical exercise they will allow for
// the entry of one for Latitude and one for Longitude of the Geocoded address
import React from 'react';

const OutputBox = (props) => {
    let text = props.text;
    let id = props.id;
    return(
      <div className="box output-box">
        <p>{text}</p>
      </div>
    )


}

export default OutputBox;
