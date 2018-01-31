// Each singular input box will be able to take different fields and be
// extensible to allow for large input fields

import React from 'react';

const InputBox = (props) => {
  let text = props.text;
  let id = "input" + props.id;

  return(
    <div className="box input-box">
      <input type="Text" id={id} placeholder={text}/>
    </div>
  )


}

export default InputBox;
