import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
    return <div className='app-wrapper'>
            <Header/>
            <Content/>
            <Footer/>
        </div>
};

export default App;
