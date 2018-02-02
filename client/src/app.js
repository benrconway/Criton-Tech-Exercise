// import React from 'react';
// import ReactDOM from 'react-dom';
// import LookUpContainer from './components/look_up_container.jsx';

// I began with the React version found in the components directory, however
// as I progressed I decided to swap back to vanilla JS and take control of all
// the aspects of the application logic.

// The program can be run easily through an npm install followed by npm start. 
import basicView from './views/basic_view.js';

window.addEventListener('DOMContentLoaded', (event) => {
  // event.preventDefault()
  basicView.displayBasicContent()

  // ReactDOM.render(
  //   <LookUpContainer/>,
  //   document.getElementById('app')
  // )
});
