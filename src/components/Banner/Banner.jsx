import React from 'react';
import './Banner.css'
import plate from '../../images/banner-plate-image.png';
import leaf from '../../images/leaf.png'
import tikmark from '../../images/tikmark.svg'
import search from '../../images/search.svg';

const Banner = () => {
    return (
        <div className='website-banner relative'>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-[200px] flex flex-wrap sm:flex-nowrap justify-center sm:justify-left">
                <div className='banner-main-text w-full sm:w-2/3 md:1/2 mb-24 lg:mb-0 text-center md:text-left'>
                    <h2 className='banner-main-heading text-4xl md:text-5xl lg:text-[65px]'>Order food online from your favourite local restaurants<span className='orange-dot'>.</span></h2>
                    {/* Banner Plate Image */}
                    <div className='banner-main-image relative block md:hidden'>
                        <div className='tik-mark-sm'>
                            <div className='flex align-center justify-center mt-12'>
                                <img className='w-5 sm:w-6 md:w-8 lg:w-9' src={tikmark} alt="" />
                                <h2 className='text-xl sm:-text-2xl md:text-3xl xl:text-[40px] text-secondary font-bold ml-3'>200k+</h2>
                            </div>
                            <p className='text-sm xl:text-[21px] text-[#838383]'>People Delivered</p>
                        </div>
                        <img className='' src={plate} alt="" />
                        <img className='banner-text-leaf-one absolute w-24 top-0 right-0 z-[-20]' src={leaf} alt="" />

                    </div>
                    <p className='banner-sub-heading text-base md:text-xl lg:text-2xl md:py-10'>Freshly made food delivered to your door.</p>
                    <form className='search-form relative h-10  w-auto md:h-[50px] xl:h-[69px]' action="">
                        <div className='round h-7 w-7 left-2 md:h-9 md:w-9 xl:h-[50px] xl:w-[50px] bg-[#FF8B00] rounded-full' ></div>
                        <input className='search-field placeholder:text-sm lg:placeholder:text-xl pl-11 md:pl-14 lg:pl-20' type="search" placeholder='Enter your location' />
                        <button className='button w-24 h-10 text-sm md:w-[150px] md:h-[50px] md:text-base lg:heading-10 lg:text-[18px] xl:text-[22px]  xl:w-[210.56px] xl:h-[68.19px] xl:leading-[45px] font-medium block mx-auto mt-3 lg:mt-0 lg:absolute right-0 top-0 flex items-center justify-center' type="submit"> 
                        <img className='mr-2 w-3 md:w-4 lg:w-auto' src={search} alt="" /> Submit</button>
                    </form>
                </div>
                {/* Banner Plate Image */}
                <div className='banner-main-image relative hidden md:block'>
                    <div className='tik-mark text-center py-3 px-2 lg:py-6 lg:px-5'>
                        <div className='flex align-center justify-center'>
                            <img className='w-5 sm:w-6 md:w-8 lg:w-9' src={tikmark} alt="" />
                            <h2 className='text-xl sm:-text-2xl md:text-3xl xl:text-[40px] text-secondary font-bold ml-3'>200k+</h2>
                        </div>
                        <p className='text-sm xl:text-[21px] text-[#838383]  '>People Delivered</p>
                    </div>
                    <img className='' src={plate} alt="" />
                    <img className='banner-text-leaf-two absolute top-[-80px] right-[0] z-[-20]' src={leaf} alt="" />
                </div>
            </div>
            <img className='banner-text-leaf-three absolute w-24 md:w-auto top-0 left-0 z-[-10]' src={leaf} alt="" />
        </div>
    );
};

export default Banner;