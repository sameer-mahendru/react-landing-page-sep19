import React, { useState, useEffect, createContext }  from 'react';
import NavBar from './NavBar';
import ColorButton from './ColorButton';
import Jumbotron from './Jumbotron';
import './App.css';

export const AppContext = createContext();

const App = () => {

  const [globalState, setGlobalState] = useState(
      { 
          loggedIn: false,
          users: []
      }
  );

  useEffect(
    ()=>{
      if(globalState.users === 0) {
        console.log('Fetching users...')
      }
    }
  );

  return (
    <AppContext.Provider value={[globalState, setGlobalState]}>
      <div className="App">
          <NavBar 
            logo="MyCompany"
          />
          <Jumbotron 
            title="Newsletter"
            lead="This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."
            description="This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."
          />

          <ColorButton />
      </div>
    </AppContext.Provider>
  );
}

export default App;
