import React from 'react';
import './Header.css';
import melody from "../assets/melody.mp3";

const Header = () => {
    return <header className='header'>
        <span>
            <audio autoPlay controls loop>
                <source src={melody}/>
            </audio>
        </span>
        <h1>Предсказано Жабой</h1>
    </header>
};

export default Header;