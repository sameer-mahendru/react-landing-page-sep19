import React, { useState }  from 'react';
import NavBar from './NavBar';
import Feed from './Feed';
import Jumbotron from './Jumbotron';
import './App.css';
import AppContext from './AppContext.js'

const App = () => {

  const [globalState, setGlobalState] = useState(
      { 
          loggedIn: true,
          users: [
            'Jim',
            'Jane',
            'Mohammad',
            'Mary'
          ]
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

          <Feed />
      </div>
    </AppContext.Provider>
  );
}

export default App;
