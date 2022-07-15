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
            At Movie Search, we believe there is a better way to focus on what movies you want to watch. We use APIs to list movie titles based on the user-inputted movie search.
            <br/>
            This world has no shortage of movie-crazy individuals, and we see that as an opportunity to build on that. We're excited to simplify movie searching for everyone through our website.
            </p>
        </div>
        </section>
    );
}


//"About" its own page and dashboard. Describes the page and the creators, mission statement

export default About;