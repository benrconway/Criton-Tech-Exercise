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
            input: ["Enter the Address here"],
            output: {
              fields:["Latitude: ", "Longitude: "],
              results: []
            }
        }
      }
  }

  render(){
    return (
      <div className="look-up-container">
        <InputContainer handleInput={this.geocodeInput} data={this.state.data.input} />
        <OutputContainer data={this.state.data.output} />
      </div>
    )
  }
}

const geocoder = new google.maps.Geocoder();



// method to alter state, which will be passed down to input container
// LookUpContainer.prototype.stateAlterationMethod = function () {
//
// };
// // method to discover handle response codes other than 200 and display
// //appropriate errors
LookUpContainer.prototype.geocodeInput = function (address) {
  let targetAddress = document.getElementById("input0").value;
  let geocodingObject = {address: targetAddress };

  // various functions to alter state and handle error appropriately.
  geocoder.geocode( geocodingObject, function(result, status) {
    if(status === google.maps.GeocoderStatus.OK) {
      console.log("success with", result[0].geometry.location.lat())
      this.setState()
    } else {
      console.log("Geocoding has failed because of " + status +
      ", please check your address and try again.")
    }
  })




};

export default LookUpContainer;
