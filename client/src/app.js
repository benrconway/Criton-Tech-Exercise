import React from 'react';
import ReactDOM from 'react-dom';
import LookUpContainer from './components/look_up_container.jsx';


window.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <LookUpContainer/>,
    document.getElementById('app')
  )
});
