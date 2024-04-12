import React, { useState } from 'react'
import { CarouselComponent } from './carousel';
import dynamics_logo from '../assets/dynamics_logo.png';
import accolades from '../assets/accolades.jpg';
import champiomship from '../assets/championship.jpg';
import lockerRoom from '../assets/lockerRoom.png';
import mobile from '../assets/mobile.png'
import check_mobile from '../assets/check_mobile.jpg'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import WMF from '../assets/WMF.png';
import offerStu from '../assets/offerStu.png';
import offerWomen from '../assets/offerWomen.png';
import { Motto } from './motto';
import useDeviceType from '../hooks/detectDevice';
import { Button, Card } from 'flowbite-react';
import CardWithHover from './CardWithHover';
import dynoFit from '../assets/dynoFit.jpeg'
import dynoKO from '../assets/dynoKO.jpeg';
import dynoUltimate from '../assets/dynoUltimate.jpeg';
import DFL from '../assets/DFL.jpeg'
import aboutFive from '../assets/aboutFive.jpg'
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
        { src: offerStu, alt: '...', link: 'https://lockerroom.in/blog/view/thiru-balachandiran-wmf-world-title' },
        { src: offerWomen, alt: '...', link: 'https://lockerroom.in/blog/view/thiru-balachandiran-wmf-world-title' },
        { src: lockerRoom, alt: '...', link: 'https://lockerroom.in/blog/view/thiru-balachandiran-wmf-world-title' },
    ];

    const mobileImages = [
        { src: mobile, alt: '...', link: 'https://lockerroom.in/blog/view/thiru-balachandiran-wmf-world-title' },
        { src: mobile, alt: '...', link: 'https://lockerroom.in/blog/view/thiru-balachandiran-wmf-world-title' },
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
            description: 'We teach Kickboxing and Muay Thai which form the perfect structure for striking combat and self-defence. The className starts with fitness sessions followed by supplementary exercises. With sparring sessions held every week, you can track your progress.',
            pricing: [
                { duration: '3 months', price: 'RS.9000' },
                { duration: '6 months', price: 'RS.13000' },
                { duration: '12 months', price: 'RS.16000' }
            ]
        }, {
            imageUrl: accolades,
            title: 'HYPER DYNAMICS',
            description: 'The whole deal. In this className, you will learn the nook and corners of MMA. It starts with workout sessions followed by supplement workouts followed by training sessions.',
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
        <div id='#home' className='w-full h-full relative bg-black flex flex-col items-center justify-center pb-4'>
            <div className=' relative flex flex-col items-center justify-center gap-4 pt-4'>
                <div className='w-[100vw] flex items-center justify-center'>
                    <Motto />
                </div>
                <div className='w-[100vw] h-[80vh] bg-transparent rounded-md'>
                    <CarouselComponent images={images} slideInterval={4000} className='h-[79vh] object-cover' />
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
                <div className='mt-6 px-2'>
                    <div className="flex gap-2 ">
                        <div className="min-w-screen min-h-screen bg-black flex items-center justify-center py-5">
                            <div className="w-full bg-black border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
                                <div className="w-full max-w-6xl mx-auto">
                                    <div className="text-center max-w-xl mx-auto">
                                        <h1 className="text-6xl md:text-7xl font-bold mb-5 text-[#f9d112]">What people <br />are saying.</h1>
                                        <div className="text-center mb-10">
                                            <span className="inline-block w-40 h-1 rounded-full bg-red-700"></span>
                                        </div>
                                    </div>
                                    <div className="-mx-3 md:flex items-start">
                                        <div className="px-3 md:w-1/3">
                                            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                                <div className="w-full flex mb-4 items-center">
                                                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                        <img src="https://i.pravatar.cc/100?img=1" alt="" />
                                                    </div>
                                                    <div className="flex-grow pl-3">
                                                        <h6 className="font-bold text-sm uppercase text-gray-600">Tammy Dhushiyanthy RobertS</h6>
                                                    </div>
                                                </div>
                                                <div className="w-full">
                                                    <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Was an absolute delight to train for kick boxing at dynamics. I thoroughly enjoyed my classes and the trainers are very professional and patient with you. They give you personal attention and train you according to your body type. Kick boxing was my childhood dream and they made it happen. My master Nishanth efficiently trained me and also made me fit and stronger. <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                                </div>
                                            </div>
                                            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                                <div className="w-full flex mb-4 items-center">
                                                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                        <img src="https://i.pravatar.cc/100?img=2" alt="" />
                                                    </div>
                                                    <div className="flex-grow pl-3">
                                                        <h6 className="font-bold text-sm uppercase text-gray-600">SAM KISHORE</h6>
                                                    </div>
                                                </div>
                                                <div className="w-full">
                                                    <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>The paramount aspects to change one's life style will be attained to the fullest here , from physical transformation to  enhanced mental health and will power to set goals and achieve them  constantly with the  help of the coaches  especially the head mentor of the club Mr. NISHANTH is an versatile martial artist who can assist and assess one's body styles and strengths accordingly and train them based on their cores.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-3 md:w-1/3">
                                            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                                <div className="w-full flex mb-4 items-center">
                                                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                        <img src="https://i.pravatar.cc/100?img=3" alt="" />
                                                    </div>
                                                    <div className="flex-grow pl-3">
                                                        <h6 className="font-bold text-sm uppercase text-gray-600">Tommie Ewart.</h6>
                                                    </div>
                                                </div>
                                                <div className="w-full">
                                                    <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>The best place to train boxing, MMA and fitness. The environment of the club so cool and best place develop yourself. Very good place to join kids, it very safe and caring and they have a great future. The coaches are so friendly and supportive to our mental stability.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                                </div>
                                            </div>
                                            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                                <div className="w-full flex mb-4 items-center">
                                                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                        <img src="https://i.pravatar.cc/100?img=4" alt="" />
                                                    </div>
                                                    <div className="flex-grow pl-3">
                                                        <h6 className="font-bold text-sm uppercase text-gray-600">Vaishnavi Nair</h6>
                                                    </div>
                                                </div>
                                                <div className="w-full">
                                                    <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>The best kick boxing classes I’ve been to . Provides the best environment for physical fitness. The coaches as well as the team are extremely cooperative towards anyone . Being a new student I had to never face the issues of uncomfortableness or any insecurities in mingling with the team .<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="px-3 md:w-1/3">
                                            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                                <div className="w-full flex mb-4 items-center">
                                                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                        <img src="https://i.pravatar.cc/100?img=5" alt="" />
                                                    </div>
                                                    <div className="flex-grow pl-3">
                                                        <h6 className="font-bold text-sm uppercase text-gray-600">Amanullah Khan</h6>
                                                    </div>
                                                </div>
                                                <div className="w-full">
                                                    <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>I've been to couple of MMA practice centers both in India and abroad . There are bits of mix in each of the gymsnthat i've picked up , like learning grappling from one center/learning Muay from one Center and Conditioning from another . Dynamics MMA is where I felt at home <br/> <br/>Nishanth Master embibes motivational speeches , inculcates liveliness into the class , makes the workout fun filled with cent percent professional learning . His explosive workout combos are very well effectice in making our reflexes and body fast which we eventually notice while putting into sparring .<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                                </div>
                                            </div>
                                            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                                <div className="w-full flex mb-4 items-center">
                                                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                                        <img src="https://i.pravatar.cc/100?img=6" alt="" />
                                                    </div>
                                                    <div className="flex-grow pl-3">
                                                        <h6 className="font-bold text-sm uppercase text-gray-600">Kris Stanton.</h6>
                                                    </div>
                                                </div>
                                                <div className="w-full">
                                                    <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Great place to start and train combat sports. People of all age groups are welcome. Dedicated and friendly coaches !<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
