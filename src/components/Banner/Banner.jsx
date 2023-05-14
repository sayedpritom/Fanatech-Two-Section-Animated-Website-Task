import React from 'react';
import './Banner.css'
import plate from '../../images/banner-plate-image.png';

const Banner = () => {
    return (
        <div className='website-banner container mx-auto px-4 py-40 flex'>
            <div>
                <div className='banner-main-text'>
                    <h2 className='banner-main-heading'>Order food online from your favourite local restaurants<span className='orange-dot'>.</span></h2>
                    <p className='banner-sub-heading'>Freshly made food delivered to your door.</p>
                    <form className='search-form' action="">
                        <input className='search-field' type="search" placeholder='Enter your location' />
                        <button className='banner-submit-btn button' type="submit">Submit</button>

                    </form>
                </div>
                <div className='banner-main-image'></div>
            </div>
            <div>
                <img src={plate} alt="" />
            </div>
        </div>
    );
};

export default Banner;