import React from 'react';
import './About.css';

import aboutImage from './about-image.jpg';
//import aboutImage from '.src/assets/cover/about-image.jpg';


function About() {
    return (
        <section className='my-5'>
            <h1 id="about">About Us</h1>
            <img src={aboutImage} className="my-2" style={{ width: "50%" }} alt="cover" />
            <div className="mx-2">
            <p>
            At Movie Meet Up, we believe there is a better way to watch movies. A more valuable way where friendship and community can develop. We're passionate about bringing people together, and our mission is to help people achieve it. 
We understand there is a desire for tangible connections and we hope to bridge this yearning. We focus on using APIs to list local movie theater showtimes, have hangout meet ups promoted by our site members, and encourage users to watch cinema together in-person. 
            </p>
            <p>
This world has no shortage of socially-starved individuals, and we see that as an opportunity to build authentic human connections. We're excited to simplify in-person hangouts for everyone through our website.
            </p>
        </div>
        </section>
    );
}


//"About" its own page and dashboard. Describes the page and the creators, mission statement

export default About;