import React from 'react';
import { useState } from 'react';

const Contact = () =>{

    const [data,setData] = useState({

        fullname:"",
        phone:"",
        email:"",
        msg:""

    });

    const inputEvent = (event) =>{


        const {name,value} = event.target;
        // console.log(name+" "+value);

        setData((preVal)=>{

            return{

                ...preVal,
                [name]:value

            }


        })

    }

    const formSubmit = (e) =>{

        e.preventDefault();
        alert(`
        Name : ${data.fullname}  
        PhoneNumber : ${data.phone}  
        Email : ${data.email} 
        Message : ${data.msg} `);

        setData({

            fullname:"",
            phone:"",
            email:"",
            msg:""
    
        });

    }



    return(

        <>

            <div className="my-5">

                <h1 className="text-center"
                style={{color:"#565387" , fontSize:"30px"}}>Contact US</h1>


            </div>

            <div className="container-fluid contact_div">

                <div className="row mb-4">

                    <div className="col-md-6 col-10 mx-auto">

                        <form onSubmit={formSubmit}>

                            <div className="mb-3">
                                <label for="exampleFormControlInput1" 
                                className="form-label">FullName</label>
                                <input type="text" 
                                className="form-control" 
                                name="fullname"
                                value={data.fullname}
                                onChange={inputEvent}
                                id="exampleFormControlInput1" 
                                placeholder="Enter fullname.." 
                                required />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" 
                                className="form-label">Phone</label>
                                <input type="number" 
                                className="form-control" 
                                name="phone"
                                value={data.phone}
                                onChange={inputEvent}
                                id="exampleFormControlInput1" 
                                placeholder="Mobile Number.." 
                                required />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" 
                                className="form-label">Email address</label>
                                <input type="email" 
                                className="form-control"
                                name="email"
                                value={data.email}
                                onChange={inputEvent}
                                id="exampleFormControlInput1" 
                                placeholder="name@example.com" 
                                required/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" 
                                className="form-label">Message</label>
                                <textarea 
                                className="form-control"
                                name="msg"
                                value={data.msg} 
                                onChange={inputEvent}
                                id="exampleFormControlTextarea1" 
                                rows="3" 
                                required></textarea>
                            </div>


                            <div className="col-12">
                                <button className="btn" type="submit">Submit Form</button>
                            </div>

                        </form>

                    </div>


                </div>


            </div>




        </>


    );

}

export default Contact;