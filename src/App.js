import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    useHistory
} from 'react-router-dom';

import PrivateRoute from './helpers/PrivateRoute';

import './App.scss';

//components
import Header from './components/Header';
import Footer from './components/Footer';

//pages
import Home from './pages/Home';
import Profile from './pages/Profile';
import ErrorPage from './pages/ErrorPage';

function App() {
    const USER_NAME = 'Test user';

    const [userName, setUserName] = useState('');

    const handleGettingAccess = (enteredUserName) => {
        setUserName(enteredUserName);
    };

    return (
        <Router>
            <div className="page">
                <Header name={userName} userName={USER_NAME} getUserName={handleGettingAccess}/>
                <div className="page__main">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <PrivateRoute exact path="/profile" component={<Profile name={USER_NAME}/>} access={userName === USER_NAME}/>
                        {/*error page*/}
                        <Route exact path="/error-page/:errorType" component={ErrorPage}/>
                    </Switch>
                </div>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
