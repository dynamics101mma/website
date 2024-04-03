import React from 'react'
import { CarouselComponent } from './carousel';
import dynamics_logo from '../assets/dynamics_logo.png';
import accolades from '../assets/accolades.jpg';
import champiomship from '../assets/championship.jpg';
import locker_room from '../assets/locker_room.jpg';
import WMF from '../assets/WMF.jpg';
import offer from '../assets/offer.png';
import { Motto } from './motto';

export function Home() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    const images = [
        { src: WMF, alt: '...' },
        { src: offer, alt: '...' },
        { src: locker_room, alt: '...' },
        // { src: champiomship, alt: '...' },
        { src: accolades, alt: '...' },
    ];

    return (
        <div className='w-full h-full relative pattern-bg-black pattern-zigzag-3d  pattern-gray-800 pattern-opacity-80  pattern-size-8 flex flex-col items-center justify-center'>
            <div className=' relative flex flex-col items-center justify-center'>
                {/* <div className='w-[80vw] flex items-center justify-center p-3'>
                    <Motto />
                </div> */}
                <div className='w-[90vw] h-[80vh] bg-transparent rounded-md'>
                    <CarouselComponent images={images} slideInterval={4000} className='h-[79vh]' />
                </div>
                {/* <div className='w-[80vw] flex items-center justify-center p-3'>
                    <Motto />
                </div> */}
            </div>
        </div>

    )
}
