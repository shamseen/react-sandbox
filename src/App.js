import React from 'react';
import ReactDom from 'react-dom';
import ReactDataGrid from './Components/Tables/Rdg-io';
// import 'bootstrap/dist/css/bootstrap.min.css';

// stamp
const App = () => {

    return (
        <div>
            <ReactDataGrid></ReactDataGrid>
        </div>
    );
};

// rendering to div we named root - using the stamp
// render() overrides anything contained in element
ReactDom.render(<App />, document.getElementById("root"));