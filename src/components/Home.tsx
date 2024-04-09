import React, { useState } from 'react'
import { CarouselComponent } from './carousel';
import dynamics_logo from '../assets/dynamics_logo.png';
import accolades from '../assets/accolades.jpg';
import champiomship from '../assets/championship.jpg';
import locker_room from '../assets/locker_room.jpg';
import check from '../assets/check.jpg'
import check_mobile from '../assets/check_mobile.jpg'
import check_mobile_2 from '../assets/check_mobile_2.jpg'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import WMF from '../assets/WMF.jpg';
import offer from '../assets/offer.png';
import { Motto } from './motto';
import useDeviceType from '../hooks/detectDevice';
import { Button, Card } from 'flowbite-react';
import CardWithHover from './CardWithHover';
import dynoFit from '../assets/dynoFit.jpeg'
import dynoKO from '../assets/dynoKO.jpeg';
import dynoUltimate from '../assets/dynoUltimate.jpeg';
import DFL from '../assets/DFL.jpeg'
import aboutFive from '../assets/aboutFive.jpg'
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useMainComponent } from '../context/mainComponent.context';
import { MainComponentContextType } from '../constants/page-constants';


export function Home() {
    const mainComponent = useMainComponent();
    const deviceType = useDeviceType();
    const [boxVisible, setBoxVisible] = useState(0);
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
        { src: WMF, alt: '...', link: 'https://lockerroom.in/blog/view/thiru-balachandiran-wmf-world-title' },
        { src: WMF, alt: '...', link: 'https://lockerroom.in/blog/view/thiru-balachandiran-wmf-world-title' },
        { src: accolades, alt: '...', link: 'https://lockerroom.in/blog/view/thiru-balachandiran-wmf-world-title' },
    ];

    const mobileImages = [
        { src: check_mobile, alt: '...', link: 'https://lockerroom.in/blog/view/thiru-balachandiran-wmf-world-title' },
        { src: check_mobile_2, alt: '...', link: 'https://lockerroom.in/blog/view/thiru-balachandiran-wmf-world-title' },
    ];
    const cardsData = [
        {
            imageUrl: 'aboutFive',
            title: 'DYNAMITE 101',
            description: 'This Package gives you the fitness that anyone in combat sports needs. Endurance & Agility are the most vital pillars for a fighter and we provide the best program to attain them.',
            pricing: [
                { duration: '3 months', price: 'RS.6000' },
                { duration: '6 months', price: 'RS.9000' },
                { duration: '12 months', price: 'RS.12000' }
            ]
        },
        {
            imageUrl: accolades,
            title: 'DYNAMITE KO',
            description: 'Boxing is one of the most elite forms of combat sports. We teach you every intricate aspect of it for you to excel. We conduct DYNAMITE KO boxing events to Punch and move your way to your boxing career.',
            pricing: [
                { duration: '3 months', price: 'RS.7000' },
                { duration: '6 months', price: 'RS.12000' },
                { duration: '12 months', price: 'RS.15000' }
            ]
        }, {
            imageUrl: accolades,
            title: 'SUPER DYNAMICS',
            description: 'We teach Kickboxing and Muay Thai which form the perfect structure for striking combat and self-defence. The class starts with fitness sessions followed by supplementary exercises. With sparring sessions held every week, you can track your progress.',
            pricing: [
                { duration: '3 months', price: 'RS.9000' },
                { duration: '6 months', price: 'RS.13000' },
                { duration: '12 months', price: 'RS.16000' }
            ]
        }, {
            imageUrl: accolades,
            title: 'HYPER DYNAMICS',
            description: 'The whole deal. In this class, you will learn the nook and corners of MMA. It starts with workout sessions followed by supplement workouts followed by training sessions.',
            pricing: [
                { duration: '3 months', price: 'RS.12000' },
                { duration: '6 months', price: 'RS.17000' },
                { duration: '12 months', price: 'RS.22000' }
            ]
        }, {
            imageUrl: accolades,
            title: 'PERSONAL TRAINING',
            description: 'This is a one-on-one package specially made for you. We give you the training that gives you the fitness that you ask for. Our package includes a diet plan along with a tailor-made workout schedule.',
            pricing: [
                { duration: '3 months', price: 'RS.2500' },
                { duration: '6 months', price: 'RS.35000' },
                { duration: '12 months', price: 'RS.45000' }
            ]
        },
    ];

    return (
        <div className='w-full h-full relative bg-black flex flex-col items-center justify-center pb-4'>
            <div className=' relative flex flex-col items-center justify-center gap-4 pt-4'>
                <div className='w-[100vw] flex items-center justify-center'>
                    <Motto />
                </div>
                <div className='w-[100vw] h-[80vh] bg-transparent rounded-md'>
                    <CarouselComponent images={ images } slideInterval={4000} className='h-[79vh] object-contain' />
                </div>
                <div className=" relative w-full">
                    <div className=" relative w-full grid md:grid-cols-5 md:grid-rows-1 grid-cols-1 grid-rows-5 md:gap-4 gap-1 px-2 md:h-64">
                        {cardsData.map((card, index) => (
                            <div key={index} className='relative w-full'>
                                <CardWithHover {...card} />
                            </div>
                        ))}
                    </div>
                </div>
                <div >
                    <Button className='text-center flex items-center text-white bg-red-700' size='xl' color={'black'} onClick={() => { mainComponent?.setMainComponent(MainComponentContextType.ABOUTUS) }}>
                        View Our Schedules
                    </Button>
                </div>
                {/* events */}
                <div className='mt-6'>

                    <div className=' font-black_ops_one text-[#f9d112] text-center text-4xl'>
                        EVENTS
                    </div>
                    <div className="grid md:grid-cols-4 md:grid-rows-1 grid-cols-1 grid-rows-4 md:pl-6 gap-4 align-middle">
                        <div > <img src={dynoFit} alt='...' /></div>
                        <div > <img src={dynoUltimate} alt='...' /></div>
                        <div > <img src={dynoKO} alt='...' /></div>
                        <div > <img src={DFL} alt='...' /></div>
                    </div>
                </div>
                <div className='mt-6 px-2'>
                    <div className=' font-black_ops_one text-[#f9d112] text-center text-4xl mb-4'>
                        BLOGS
                    </div>
                    <div className="flex gap-2 ">
                        <a href='https://lockerroom.in/blog/view/thiru-balachandiran-wmf-world-title' target='_blank' >
                            <Card className="max-w-sm bg-black" imgSrc={WMF} imgAlt='BLOGS'  >
                                <div className='flex flex-col gap-3 justify-center items-center'>
                                <h5 className="text-md text-pretty line-clamp-3 text-center font-bold tracking-tight text-yellow-300  ">
                                    Indian Fighter<br />Thiru Balachandiran, Clinches WMF World Title Belt
                                </h5>
                                <button className='bg-[#f9d112] text-center w-1/2 rounded-md text-md p-2 font-semibold'>READ MORE...</button>
                                </div>
                            </Card>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}
