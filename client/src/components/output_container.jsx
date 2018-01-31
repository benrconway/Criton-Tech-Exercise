// Higher level output container into which all manner of output boxes can be
// placed inside. For the purpose of Criton tech exercise, two output boxes that
// display lat and long will be placed inside.
import React from 'react';
import OutputBox from './output_box.jsx';

const OutputContainer = (props) => {

//Map through the props data to make sufficient number of output boxes with
// text related to what is in props.
// Don't forget to add tags for indentifying where various CSS markers will
// make changes to what is shown.
const outputs = props.data.fields.map((text, index) => {
  return(
    <OutputBox
      key={index}
      text={text}
    />
  )
})

return (
  <div id="output-container">
    {outputs}
  </div>
)
}

export default OutputContainer;
