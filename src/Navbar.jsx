import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () =>{

    return(

        <>

        <div className='container-fluid'>

            <div className='row'>

                <div className='col-10 mx-auto'>


                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <NavLink to="/" className="navbar-brand">
                                AkFoto
                            </NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <NavLink to="/" className="nav-link" aria-current="page" >
                                    Home
                                </NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink to="/Service" className="nav-link">
                                    Services
                                </NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink to="/About" className="nav-link">
                                    About
                                </NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink to="/Contact" className="nav-link">
                                    Contact
                                </NavLink>
                                </li>
                                
                            </ul>
                            
                            </div>
                        </div>
                    </nav>
                </div>


            </div>

        </div>


        </>


    );



}

export default Navbar;