import React, {useState} from 'react';
import './Content.css';
import Up from '../assets/images/up.jpeg';
import Cross from '../assets/images/cross.jpeg';
import Ivasi from '../assets/images/ivashi.jpg';
import Dragon from '../assets/images/dragon.jpeg';
import Smoke from '../assets/images/smoke.jpeg';
import Drunk from '../assets/images/drunk.jpeg';
import OnCarp from '../assets/images/onCarp.jpeg';
import Afraid from '../assets/images/afraid.jpeg';
import Cute from '../assets/images/cute.jpeg';
import Sad from '../assets/images/sad.jpeg';
import Sit from '../assets/images/sit.jpeg'

const answers = [
    {id: 0, text: 'Если спешишь - поезжай в объезд.', img: Up},
    {id: 1, text: 'У кривой ветки и тень кривая.', img: Cross},
    {id: 2, text: 'Лучше быть головой иваси, чем хвостом карпа.', img: Ivasi},
    {id: 3, text: 'Карп, плывущий против течения, станет драконом.', img: Dragon},
    {id: 4, text: 'Лягушка, живущая в колодце, не знает о море.', img: Smoke},
    {id: 5, text: 'Барсуки - из одной норы.', img: Drunk},
    {id: 6, text: 'Если рыба захочет, вода уступит.', img: OnCarp},
    {id: 7, text: 'И мотылек живёт целую жизнь.', img: Afraid},
    {id: 8, text: 'Дети лягушек — лягушки.', img: Cute},
    {id: 9, text: 'Копоть от масла смывают маслом.', img: Sad},
    {id: 10, text: 'Завтра подует завтрашний ветер.', img: Sit},
]

export const Content = () => {
    const [i, setI] = useState(0)
    const [isFortuneVisible, setVisibility] = useState(false);
    const show = () => {
        setVisibility(true);
        setI(Math.floor(Math.random() * (answers.length)));
    }
    const hide = () => {
        setVisibility(false);
    }

    return <main className='main'>
        {/*START BLOCK*/}
        <div className='block content-block'>
            <div className='content-block-text'>
                Вы спросили у жабы
            </div>
            <button className='button content-block-button' onClick={show}>Предсказать</button>
        </div>
        {/*FORTUNE BLOCK*/}
        {isFortuneVisible === true ? (<div className='block fortune-block'>
            <img className='fortune-block-image' src={answers[i].img} alt=''/>
            <div className='fortune-block-text'>{answers[i].text}</div>
            <button className='button content-block-button' onClick={hide}>Спасибо, Жаба</button>
        </div>): null}
    </main>
}