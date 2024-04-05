import React, { useState, useEffect } from 'react';
import aboutOne from '../assets/aboutOne.jpg';
import aboutTwo from '../assets/aboutTwo.jpg';
import aboutThree from '../assets/aboutThree.jpg';

export function AboutUs() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [aboutOne, aboutTwo, aboutThree];
    const titles = ["Boxing", "MMA", "Muay Thai"]; // Titles for the images

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div  style={{ position: 'relative', padding: '10px', color:'black' }}>
            <div className="text-white text-justify" style={{ maxWidth: '800px', margin: 'auto' }}>
                <h1 style={{ fontSize: '1.9rem', fontWeight: 'bold', letterSpacing: '1px', textAlign: 'center' }}>
                    <span style={{ color: 'yellow' }}>Dynamics 101 MMA:</span> Forging Champions in Chennai's Combat Sports Scene
                </h1>
                <p style={{ letterSpacing: '1px', textAlign: 'justify' }}>
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
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'yellow', textAlign: 'center', marginTop: '20px', padding: '10px 20px' }}>
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
                <div style={{ position: 'relative', overflow: 'hidden', margin: '20px 0' }}>
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '100%' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)' }}>{titles[currentImageIndex]}</h2>
                    </div>
                    <img
                        src={images[currentImageIndex]}
                        alt={`about${currentImageIndex + 1}`}
                        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                    />
                </div>
               
            </div>
            <div style={{ height: '100px' }}></div> {/* Maintain gap between button and footer */}
        </div>
    );
}
