// Higher level output container into which all manner of output boxes can be
// placed inside. For the purpose of Criton tech exercise, two output boxes that
// display lat and long will be placed inside.
import React from 'react';
import OutputBox from './output_box.jsx';

const OutputContainer = (props) => {

  //Map through the props data to make sufficient number of output boxes with
  // text related to what is in props.

// At present the props get passed down, but not all addresses seem to work.
// They only re-render changes every now and then and seem to be blasted back to
// original by a refresh that I haven't located. Could it be Firefox?

  console.log("props passed down: ", props.data)
  let content;
    if(props.data.results.length <= 0 ){
      content = props.data.fields.map((value, index) =>{
        return (
          <OutputBox
            key={index}
            text={value}
          />
        )
      })
    } else {
      content = props.data.results.map((value, index)=>{
        return (
          <OutputBox
            key={index}
            text={value}
          />
        )
      })

    }



return (
  <div id="output-container">
    {content}
  </div>
)
}

export default OutputContainer;
