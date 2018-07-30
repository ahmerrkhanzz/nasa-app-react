import './assets/stylesheets/styles.scss';

import React from 'react'; // import the main react dependency
import ReactDOM from 'react-dom'; // import reactDOM
import { Provider } from 'react-redux' // Glue for react and redux
import App from './app/App.js'; // import the main app component
import Store from './app/Store'

ReactDOM.render(
    <Provider store = {Store}>
        <App /> 
    </Provider>, 
    document.getElementById('root')
); // render our App component and mount it to our #root element
