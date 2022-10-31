import React from 'react';
import Banner from './Banner';
import './HomeScreen.css';
import Nav from './Nav';

function HomeScreen() {
    return (
        <div className='homescreen'>
            <Nav /> 
            <Banner /> 
        </div>
    )
}

export default HomeScreen