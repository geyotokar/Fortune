import React from 'react';
import './Header.css';
import melody from '../assets/melody.mp3'

const Header: React.FC = () => {
    return <header className='header'>
        <span>
            <audio autoPlay controls loop>
                <source src={melody}/>
            </audio>
        </span>
        <h1 className='header header-text'>Предсказано Жабой</h1>
    </header>
};

export default Header;