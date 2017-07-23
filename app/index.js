import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App.jsx';
const props = {
    dataUrl: "app/shared/json/employeeDetails.json"
}

ReactDOM.render(<App { ...props } />, document.getElementById('react-container'));