import React from 'react';
import './Banner.css';

function Banner() {

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n -1) + '...' : string;
    }
  return (
    <header className='banner' style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://www.pngkey.com/png/full/66-665879_because-like-most-people-the-honeys-are-always.png")`,
        backgroundPosition: "center center",
    }}>
        <div className='banner__contents'>
        <h1 className='banner__title'>Movie Name</h1>
        <div className='banner__buttons'>
            <button className='banner__button'>Play</button>
            <button className='banner__button'>My List</button>

        </div>
        <h1 className='banner_description'>{truncate(`This will be a test description This will be a test descriptionThis will be a test descriptionThis will be a test descriptionThis will be a test descriptionThis will be a test descriptionThis will be a test descriptionThis will be a test descriptionThis will be a test descriptionThis will be a test descriptionThis will be a test descriptionThis will be a test description`, 150)} </h1>
        </div>

        <div className='banner--fadeBottom' />
             
    </header>
  )
}

export default Banner