import React from 'react';
import { NavLink } from 'react-router-dom';
import image from "./images/camera2.jpg";
import Common from './Common';

const About = () =>{

    return(

        <>

           <Common 
            name="Welcome to About page"
            content="Contact us for any kind of photoshoot."
            imggsrc={image}
            visit="/contact"
            btname="Contact Now"
           />


        </>


    );

}

export default About;