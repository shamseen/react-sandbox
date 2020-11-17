import React from 'react';
import ReactDom from 'react-dom';
import RDGio from './Components/Tables/Rdg-io.js';
// import 'bootstrap/dist/css/bootstrap.min.css';

// stamp
const App = () => {

    return (
        <div>
            <br /><br />
            <a href="https://github.com/shamseen/react-sandbox/tree/rdg-io"
                class="btn btn-primary btn-lg active"
                role="button"
                aria-pressed="true">
                Github repo
            </a>
            <br /><br />
            <RDGio />
        </div>
    );
};

// rendering to div we named root - using the stamp
// render() overrides anything contained in element
ReactDom.render(<App />, document.getElementById("root"));