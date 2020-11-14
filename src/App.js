import React from 'react';
import ReactDom from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// stamp
const App = () => {

    return (
        <div>
            boilerplate app.js
        </div>
    );
};

// rendering to div we named root - using the stamp
// render() overrides anything contained in element
ReactDom.render(<App />, document.getElementById("root"));