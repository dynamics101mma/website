import React, { useState, useEffect } from 'react';
import aboutOne from '../assets/aboutOne.jpg';
import aboutTwo from '../assets/aboutTwo.jpg';
import aboutThree from '../assets/aboutThree.jpg';
import aboutFour from '../assets/aboutFour.jpg';
import aboutFive from '../assets/aboutFive.jpg';
import { Button } from "flowbite-react";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import Groups3Icon from '@mui/icons-material/Groups3';

const Count = () => {
  const [Members, setMembers] = useState(0);
  const [Medals, setMedals] = useState(0);
  const [Clubs, setClubs] = useState(0);
  
  useEffect(() => {
    const animateCounter = (targetValue: number, setStateFunction: React.Dispatch<React.SetStateAction<number>>) => {
      let currentValue = 0;
      const interval = setInterval(() => {
        currentValue += 1;
        setStateFunction(currentValue);

        if (currentValue === targetValue) {
          clearInterval(interval);
        }
      }, 10);
    };

    animateCounter(1000, setMembers);
    animateCounter(500, setMedals);
    animateCounter(3, setClubs);
   
  }, []);

  return (
    <div style={{ backgroundColor:'#000', padding: '20px', marginTop:'20px' }}>
      <div className="pt-2 pb-2 " style={{display:'flex',justifyContent:'space-around'}} >
        <div>
          <PersonOutlineIcon style={{ fontSize: '80px', color: '#FFD700' }} />
          <h3 className="text-center" style={{ fontWeight:'bold', color: '#FFD700' }}>{Members}+ <p style={{ fontSize:'15px', fontWeight:'none', color:'#fff' }}>Members</p></h3>
        </div>
        <div>
          <MilitaryTechIcon style={{ fontSize: '80px', color: '#FFD700' }} />
          <h3 className="text-center" style={{ fontWeight:'bold', color: '#FFD700' }}>{Medals}+ <p style={{ fontSize:'15px', fontWeight:'none', color:'#fff' }}>Medals</p></h3> 
        </div>
        <div>
          <Groups3Icon style={{ fontSize: '80px', color: '#FFD700' }} />
          <h3 className='text-center' style={{ fontWeight:'bold', color: '#FFD700' }}>{Clubs} <p style={{ fontSize:'15px', fontWeight:'none', color:'#fff' }}>Clubs</p></h3> 
        </div>
      </div>
    </div>
  );
};

export function AboutUs() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showImage, setShowImage] = useState(false);
  const [showTitle, setShowTitle] = useState(true);
  const images = [aboutOne, aboutTwo, aboutThree, aboutFour,aboutFive];
  const titles = ["BOXING", "MMA", "KICKBOXING", "MUAY THAI", "CALISTHENICS"];

  useEffect(() => {
    const interval = setInterval(() => {
      setShowImage(false);
      setShowTitle(false);
      setTimeout(() => {
        setCurrentImageIndex(prevIndex =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setShowImage(true);
        setShowTitle(true);
      }, 1000);
    }, 2500);

    return () => clearInterval(interval);
  }, [images.length]);


  return (
    <div className='bg-black' style={{ position: 'relative', padding: '10px' }}>
      <div className="text-white text-justify" style={{ maxWidth: '800px', margin: 'auto' }}>
        <h1 style={{ fontSize: '1.9rem', fontWeight: 'bold' ,letterSpacing:'1px', textAlign: 'center'}}>
          <span style={{ color: 'yellow' }}>Dynamics 101 MMA:</span> Forging Champions in Chennai's Combat Sports Scene
        </h1>
        <p className="mt-4"style={{textAlign:'center'}}>
          Established in 2019 by the formidable coach Nishanth, a former national MMA champion and revered gym trainer, Dynamics 101 MMA stands as one of the most dominating striking-based MMA clubs in India,
          renowned throughout the fight world of Chennai and beyond. Rooted in Nishanth's unwavering passion for martial arts and fitness,
          our club represents more than just a training facility—it's a crucible where warriors are forged and champions are born.
          With a diverse array of programs including Brazilian Jiu-Jitsu, Muay Thai, Boxing, Kickboxing, Wrestling, and Strength and Conditioning,
          Dynamics 101 MMA offers a comprehensive training experience for enthusiasts of all levels. Under the expert guidance of elite coaches handpicked by Nishanth himself, 
          our members embark on a journey of self-discovery and mastery, pushing the boundaries of their physical and mental prowess.
          But Dynamics 101 MMA is more than just a training ground—it's a community united by a shared passion for combat sports. 
          Here, camaraderie thrives, and bonds forged through sweat and determination transcend the confines of the gym. Our ethos of inclusivity welcomes warriors of all ages and backgrounds, fostering an environment where everyone can thrive and excel.
          Dynamics 101 MMA has emerged as a powerhouse in the combat sports landscape, attracting a legion of dedicated individuals hungry for success.
          From local tournaments to national stages, our warriors fearlessly represent our club,fueled by the relentless pursuit of greatness that defines the clubs legacy.
        </p>
        <Button
          className="bg-yellow-300 text-white rounded py-2 px-4 mt-4 mx-auto block"
          onClick={() => console.log("Button clicked")}
        >
          Meet the team
        </Button>
        <Count />
        <h2 className="text-2xl font-bold" style={{ color: '#F6E40C', textAlign: 'center', marginTop: '8px', padding: '2px 4px' }}>
          Join us at Dynamics 101 MMA, where the spirit of champions reigns supreme, and every punch thrown is a step closer to greatness. Check out our workout schedule and book a free trial class
        </h2>
        <button style={{ 
          backgroundColor: 'yellow', 
          color: 'black', 
          border: 'none', 
          padding: '10px 20px', 
          fontSize: '1rem', 
          fontWeight: 'bold', 
          borderRadius: '5px',  
          marginBottom: '20px',
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'block',
        }}>
          Workouts & Schedule
        </button>
      </div>
      <div style={{ height: '70px' }}></div> {/* Maintain gap between button and footer */}
    </div>
  );
}

