import React from 'react';
import NavBar from './NavBar';
import Jumbotron from './Jumbotron';
import './App.css';


const App = () => {
  return (
    <div className="App">
        <NavBar 
          logo="BBC"
        />
        <Jumbotron 
          title="Newsletter"
          lead="This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."
          description="This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."
        />
    </div>
  );
}

export default App;