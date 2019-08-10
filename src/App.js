

import React from 'react';

let Welcome = props => {
    return <h1>Hey {props.name} Automating Shifts For Your Organization Like No Other</h1>
}

const App = () => {
    return (
      <div className="App">
        <Welcome name="Adam" />
        <Welcome name="Steve" />
        <Welcome name="Jib" />
      </div>
    );
}


export default App;