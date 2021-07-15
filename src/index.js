import React from 'react';  // importing the React library into this index.js file
import ReactDOM from 'react-dom'; // This import allows us to access the React.DOM.render()function
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(<App />, document.getElementById('root'));