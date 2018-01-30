// Parent container of the entire app.
// Input and output containers will be inserted into here and they in turn will
// have input and output boxes entered inside them.

import React from 'react';
import InputContainer from './input_container.jsx';
import OutputContainer from './output_container.jsx';

class LookUpContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data: {
            input: ["Enter the address here"],
            output: ["Latitude", "Longitude"]
            }
    }
  }

  render(){
    return (
      <div className="look-up-container">
        <InputContainer data={this.state.data.input} />
        <OutputContainer data={this.state.data.output} />
      </div>
    )
  }
}

//
// // method to alter state, which will be passed down to input container
// LookUpContainer.prototype.stateAlterationMethod = function () {
//
// };
// // method to discover handle response codes other than 200 and display
// //appropriate errors
// LookUpContainer.prototype.responseCodeInterpretation = function () {
//
// };

export default LookUpContainer;
