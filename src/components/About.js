import React from 'react';
import './About.css';

//import aboutImage from './about-image.jpg';
import aboutImage from '../assets/cover/about-image.jpg';


function About() {
    return (
        <section className='my-5'>
            <h1 id="about">About Us</h1>
            <img src={aboutImage} className="my-2" style={{ width: "50%" }} alt="cover" />
            <div className="mx-2" >
            <p>
                Movies bring people together, and we wanted to create a site to bring people together to look up movies and talk about them.
            </p>
        </div>
        </section>
    );
}


//"About" its own page and dashboard. Describes the page and the creators, mission statement

export default About;