import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = (props) =>{

    return(

        <>

            <div className='col-md-4 col-sm-10 d-flex justify-content-center'>
                <div className="card mt-3" style={{width: "18rem"}}>
                    <img src={props.imgsrc} className="card-img-top" alt="serviceImages" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.moto}</p>
                        <NavLink to="/contact" className="btn">Contact Us</NavLink>
                    </div>
                </div>
            </div>

            
        </>


    );


}

export default Card;