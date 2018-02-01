// Parent container of the entire app.
// Input and output containers will be inserted into here and they in turn will
// have input and output boxes entered inside them.


import React from 'react';
import InputContainer from './input_container.jsx';
import OutputContainer from './output_container.jsx';



class LookUpContainer extends React.Component {

  constructor(props){
    super(props);
    this.geocodeInput = this.geocodeInput.bind(this)
    this.state = {
      data: {
            input: ["Enter the Address here"],
            output: {
              fields:["Latitude", "Longitude"],
              results: []
            }
      }
    }
  }

  render(){
    return (
      <div className="look-up-container">
        <InputContainer
          handleInput={this.geocodeInput}
          data={this.state.data.input} />
        <OutputContainer data={this.state.data.output} />
      </div>
    )
  }
}

const geocoder = new google.maps.Geocoder();



LookUpContainer.prototype.geocodeInput = function (address) {

  console.log("event triggered")
  let targetAddress = document.getElementById("input0").value;
  let geocodingObject = {address: targetAddress };
  let newState = this.state.data;

  // various functions to alter state and handle error appropriately.
  geocoder.geocode( geocodingObject, function(result, status) {
    if(status === google.maps.GeocoderStatus.OK) {
    //   console.log("success with", result[0].geometry.location.lat() + ', ' +
    // result[0].geometry.location.lng())
    let latLng = result[0].geometry.location;
    newState.output.results.push(latLng.lat())
    newState.output.results.push(latLng.lng())
    } else {
      // function that will replace appropriate bits and pieces to show an error
      console.log("Geocoding has failed because of " + status +
      ", please check your address and try again.")
    }

  })
  // attempting to see if it is a time related issue that keeps my newState from
  // becoming the current state. Mayhaps I don't remember React as well as I
  // thought. This however is what docs and stack overflow are for.

    console.log("newstate at theoretical state change", newState)
    this.setState({data: newState});
    console.log("new state", this.state);


};








export default LookUpContainer;
