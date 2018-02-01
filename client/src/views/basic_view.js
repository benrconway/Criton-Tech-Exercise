
// After having issue with random refreshes and inconsistent behaviour, I
// moved from React to vanilla Javascript. I have the same functionality in a
// great deal less time, however the same errors are causing continued problems.

import Renderer from "./renderer.js"

const geocoder = new google.maps.Geocoder();

const basicView = {
  renderBasicContent: function(){
    var box = document.getElementById("app")
    box.className = "main-container";
    this.createInputField(box);
    this.createOutputFields(box);
  },

  createOutputFields: function(parentDiv) {
    // All of the various HTML elements are created and given necessary
    // qualities here.
    const containingDiv = document.createElement("div");

    const latDiv = document.createElement("div");
    latDiv.className = "box output-box";

    const latPtag = document.createElement("p");
    latPtag.id = "lat-output";
    latPtag.innerText = "Latitude";

    const lngDiv = document.createElement("div");
    lngDiv.className = "box output-box";

    const lngPtag = document.createElement("p");
    lngPtag.id = "lng-output";
    lngPtag.innerText = "Longitude";

    // They are all appended to parent elements in an appropriate order
    // that will display as desired
    latDiv.appendChild(latPtag);
    lngDiv.appendChild(lngPtag);
    containingDiv.appendChild(latDiv);
    containingDiv.appendChild(lngDiv);
    parentDiv.appendChild(containingDiv);

  },

  createInputField: function(parentDiv) {
    // As above, creates elements and gives them the necessary information
    const containingDiv = document.createElement("div");
    containingDiv.id = "input-div";
    const input = document.createElement("input");

    input.type = "Text";
    input.id = "address-input";
    input.placeholder = "Address";
    containingDiv.appendChild(input);

    // This event listener will gives functionality of using the 'enter' key
    // instead of a button and creating a slightly more fluid experience.
    containingDiv.addEventListener("keyup", function(event){
      event.preventDefault();
      if(event.key === "Enter"){
        const targetAddress = document.getElementById("address-input").value;
        const geocodingObject = {address: targetAddress };

        // Geocoder will take the address and send information onto the relative
        // render functions.
        geocoder.geocode( geocodingObject, function(result, status) {
          if(status === google.maps.GeocoderStatus.OK) {
            Renderer.renderResults(result[0].geometry.location)
          } else {
            // function that will replace appropriate bits and pieces to show an error
            const errorReport = "Address not found, please check the address and try again."
            Renderer.renderError(errorReport)
          }
        })
        }
      }
    )
    parentDiv.appendChild(containingDiv);
  }


  //these have been farmed out to a seperate file to be imported and make them
  //more adaptable and functional.

  // renderResults: function(latLng){
  //   const lat = latLng.lat()
  //   const lng = latLng.lng()
  //   const latField = document.getElementById("lat-output")
  //   const lngField = document.getElementById("lng-output")
  //   latField.innerText = lat;
  //   lngField.innerText = lng;
  //
  // },
  //
  // renderError: function(report){
  //   const parent = document.getElementById("input-div")
  //   const pTag = document.createElement("p");
  //   pTag.id = "error-text"
  //   pTag.innerText = report;
  //   parent.appendChild(pTag);
  //
  // }

}

export default basicView;
