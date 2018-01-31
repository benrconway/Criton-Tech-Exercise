// Larger container to put all input fields into.
import React from 'react';
import InputBox from './input_box.jsx'

const InputContainer = (props) => {

// cycle through the props of inputs data array and make input boxes. this
// example will only have one, but could be expanded.
// Then add function for collecting information from the input box and sending
// it to Geocoder which will in turn be passed up the ladder to change the
// output state which filters down and alters the  output boxes.

  const inputs = props.data.map((text, index) => {
    return(
      <InputBox
        key={index}
        text={text}
        id={index}
      />
    )
  })

    window.addEventListener('keyup', function(event){
      // console.log(event.key);
      if(event.key === "Enter"){
          props.handleInput()
      }
    })

  return (
    <div id="input-container">
      <form id="input-form">
        {inputs}
      </form>
    </div>
  )

}

export default InputContainer;
