import React, { useState, useEffect, createContext }  from 'react';
import NavBar from './NavBar';
import Jumbotron from './Jumbotron';
import './App.css';

export const AppContext = createContext();

const App = () => {

  const [globalState, setGlobalState] = useState(
      { 
          loggedIn: false,
      }
  );

  useEffect(
    ()=>{
    }
  );

  return (
    <AppContext.Provider value={[globalState, setGlobalState]}>
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
    </AppContext.Provider>
  );
}

export default App;
