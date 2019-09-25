import React, { useContext }  from 'react';
import AppContext from './AppContext';

const FeedCard = (prop) => {
    return (
        <div className="card">
            <img src="" className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{prop.name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">View profile</a>
            </div>
        </div>
    )
}

const Feed = () => {
    // AppContent is a component created in App.js
    // useContext will access the values of AppContext
    const [globalState, setGlobalState] = useContext(AppContext);

    if(globalState.loggedIn) {
    return (
        <div className="feed container">
            { 
                // [ 'Jim', 'Jane', 'Mohammad', 'Mary'  ]
                globalState.users.map(
                    name => <FeedCard name={name} />
                ) 
            }
        </div>
    )
    } else {
        return (
            <div />
        )
    }
}

export default Feed;