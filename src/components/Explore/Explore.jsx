import React from 'react';
import './Explore.css';
import bike from '../../images/bike.png';
import arrow from '../../images/right-arrow.svg';

const Explore = () => {
    return (
        <div className='bg-[#fff] py-24'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-wrap align-center justify-center sm:justify-left sm:text-left md:flex-nowrap'>
                <div className='w-full text-center md:text-left md:w-4/6 py-20 md:mr-20'>
                    <h2 className='banner-main-heading text-4xl md:text-5xl lg:text-[50px]'>Explore your <br /> favourite city’s food.</h2>
                    <p className='text-[12px] md:text-[14px] lg:text-[18px] leading-[160%]  font-light text-[#676767] my-8'>Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh tristique. Non ligula tristique ut ut libero sit convallis maecenas. At egestas auctor porta mattis.</p>
                    <button className='button text-sm mx-auto px-5 py-3 text-center flex items-center justify-center md:mx-0 lg:w-[154px] lg:h-[58px] lg:text-[20px]'>
                        <span>Explore</span>
                        <img className='ml-2 w-3 md:w-auto' src={arrow} alt="" />
                    </button>
                </div>
                <div className='bike-container bg-red-200 min-h-[300px]'>
                    <img className='bike w-1/4 mb-[30px] sm:w-1/3 sm:mb-[35px] md:w-1/2 md:mb-[150px] lg:mb-[120px] lg:w-auto' src={bike} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Explore;