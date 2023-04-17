
import './social.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { BsInstagram } from "react-icons/bs";
import { TiSocialFacebook } from "react-icons/ti";
import { SiTwitter } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { RiLinkedinLine } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { useEffect } from 'react';
import AOS from 'aos';
import '../../../node_modules/aos/dist/aos.css';
function Social() {




    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zvlbwwe', 'template_gn3peqi', form.current, 'UPxTKtShXuVzCpBxO')
            .then((result) => {
                console.log(result.text);
              window.alert("message sent");
            }, (error) => {
                console.log(error.text);
            });
    };
   

    useEffect(() => {
        AOS.init({duration:1000});
        
      }, []);

    return (
        <>
            <div className='s-container' id='social12'>
            <h1 className='f-h1'>Contact Me</h1>
                <div className='ssp'>
                    <div className='ssp2'>
                       
                        <div className='form-container12' data-aos="zoom-in">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className='ipt-l'>
                                    <label>Name</label>
                                    <input type="text" name="to_name" required />
                                </div>
                                <div className='ipt-l'>
                                    <label>Email</label>
                                    <input type="email" name="from_name" required />
                                </div>

                                <div className='ipt-l'>
                                    <label>Message</label>
                                    <textarea name="message" required />
                                </div>

                                <div className='btn-12'>
                                <button className='btn-123 '>Submit</button>
                                </div>

                            </form>
                        </div>

                    </div>
                    <div className='ssp1'>
                        <div className='logo-con' data-aos="zoom-in">
                            <div className='logo-img'>
                                <AiOutlineUser className='ll' />
                            </div>
                            <div className='logo-text'>
                                <h5>Name </h5>
                                <p className='text-p'>Anuj Kumar</p>
                            </div>
                        </div>
                        <div className='logo-con' data-aos="zoom-in" >
                            <div className='logo-img'>
                                <MdLocationOn className='ll' />
                            </div>
                            <div className='logo-text'>
                                <h5>Location </h5>
                                <p className='text-p'>Lucknow,Uttar Pradesh</p>
                            </div>
                        </div>
                        <div className='logo-con' data-aos="zoom-in">
                            <div className='logo-img'>
                                <MdOutlineEmail className='ll' />
                            </div>
                            <div className='logo-text'>
                                <h5>Email </h5>
                                <p className='text-p'>anujkumar666768@gmail.com</p>
                            </div>
                        </div>
                        <div className='logo-con' data-aos="zoom-in" >
                            <div className='logo-img'>
                                <IoIosCall className='ll' />
                            </div>
                            <div className='logo-text'>
                                <h5>Call </h5>
                                <p className='text-p'>+91 8960702700</p>
                            </div>
                        </div>

                    </div>



                </div>
            </div>

            <div className='footer12' id='footrt12'>
                <h1>ANUJ  KUMAR</h1>
                <div className='navii'>
                    <a className='naviia' href='#home12' > Home</a>
                    <a className='naviia' href='#quali12' > Education</a>
                    <a className='naviia' href='#services12' > Services</a>
                    <a className='naviia' href='#skill12' > Skills</a>
                </div>
                <div className='s-div'>
                    <div className='insta'  >
                        <a className='insta-link' href='https://www.instagram.com/anujkumar49314/?igshid=ZDdkNTZiNTM%3D'> <BsInstagram className='tt' style={{ width: "60%", height: "60%", margin: "auto" }} /></a>

                    </div>
                    <div className='insta' >
                        <a className='insta-link' href='https://www.facebook.com/people/Anuj-Kumar/100033796410682/?mibextid=ZbWKwL'><TiSocialFacebook className='tt' style={{ width: "70%", height: "70%", margin: "auto" }} /></a>

                    </div>
                    <div className='insta' >
                        <a className='insta-link' href='https://twitter.com/AnujKum41252487' ><SiTwitter className='tt' style={{ width: "60%", height: "60%", margin: "auto" }} /></a>

                    </div>
                    <div className='insta' >
                        <a className='insta-link' href='https://github.com/Buildwithus'> <BsGithub className='tt'  style={{ width: "70%", height: "70%", margin: "auto" }} /></a>

                    </div>
                    <div className='insta' >
                        <a className='insta-link' href='https://www.linkedin.com/in/anuj-kumar-756826225/'><RiLinkedinLine className='tt' style={{ width: "70%", height: "70%", margin: "auto" }} /></a>

                    </div>

                </div>
                <p className='last-d' >Copyright © Anuj Kumar. All rights reserved</p>
            </div>
        </>
    )
}
export default Social;