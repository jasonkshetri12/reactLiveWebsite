import React from 'react';


const Footer = () =>{

    const date = new Date().getFullYear();



    return(

        <>

            <footer className=" my-4 my-md-4 my-sm-4 w-100 text-center bg-light">

                <p>©️ {date} AkFoto Official. All Rights Reserved | Terms and conditions </p>

            </footer>

        </>


    );


}


export default Footer;