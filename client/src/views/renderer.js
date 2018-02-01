const renderer = {

  // This function defines which function is needed to achieve desired output
  renderResults: function(latLng){
    if(!document.getElementById("error-text")){
      this.renderAsNormal(latLng);
    } else {
      this.removeErrorMsgFirst(latLng);
    }
  },


  renderAsNormal: function(latLng){
    //Extract the desired information.
    const lat = latLng.lat()
    const lng = latLng.lng()
    // Gather the required HTML elements.
    const latField = document.getElementById("lat-output")
    const lngField = document.getElementById("lng-output")
    // Change their text to meet desired output.
    latField.innerText = lat;
    lngField.innerText = lng;
  },

  removeErrorMsgFirst: function(latLng){
    //This function removes the error message on subsequent searches.
    const inputfield = document.getElementById("input-div")
    inputfield.removeChild(inputfield.lastChild)
    this.renderAsNormal(latLng);
  },

  renderError: function(report){
    // If an error is thrown, this function will check to see if there is already
    // a message showing. If there isn't one, it will add an error message
    // and return the lat/lng fields to original setting.
    const parent = document.getElementById("input-div")
    if(!document.getElementById("error-text")){
      const pTag = document.createElement("p");
      pTag.id = "error-text"
      pTag.innerText = report;
      parent.appendChild(pTag);
    }
    // In the case of an error being thrown, this section ensures the fields will
    // return or maintain simply saying Latitude and Longitude.
    const latField = document.getElementById("lat-output")
    const lngField = document.getElementById("lng-output")
    latField.innerText = "Latitude";
    lngField.innerText = "Longitude";
  }

}

export default renderer;
