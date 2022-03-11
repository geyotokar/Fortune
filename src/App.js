import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from "./components/Nav/Nav";
import {Content} from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TwoSum from "./components/Content/TwoSum";

const App = () => {
    return <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <Nav/>
                <Routes>
                    <Route path='/1' element={<Content/>}/>
                    <Route path='/2' element={<TwoSum/>}/>
                </Routes>
            <Footer/>
        </div>
    </BrowserRouter>
};

export default App;
