import React from 'react';
import { NavLink } from 'react-router-dom';
import image from "./images/camera1.jpg";
import Common from './Common';

const Home = () =>{

    return(

        <>

           <Common 
            name="Capture your moments with"
            content="We provide the best photoshoot with special offers."
            imggsrc={image}
            visit="/service"
            btname="Get Started"
           />


        </>


    );

}

export default Home;