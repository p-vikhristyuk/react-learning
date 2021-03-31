import React from 'react';
import './App.scss';

//components
import Header from './components/Header';
import Footer from './components/Footer';

//pages
import Home from './pages/Home';

function App() {
    return (
        <div className="page">
            <Header name={'John Doe'}/>
            <div className="page__main">
                <Home/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
