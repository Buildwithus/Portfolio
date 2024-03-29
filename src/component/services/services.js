import './services.css'

import { useEffect } from 'react';
import AOS from 'aos';
import '../../../node_modules/aos/dist/aos.css';

function Services() {
    useEffect(() => {
        AOS.init({duration:2000});
        
      }, []);
    return (
        <>
       
            <div className='services-container' id='services12'>
                <h1 className='s-h1' >SERVICES</h1>
                <div className='cards'>
                    <div className='cards1'  data-aos="zoom-in"  >
                       
                        <h3 className='s-p'>FULL-STACK WEB APPLICATION DEVELOPMENT</h3>
                        <p className='s-p1'>Using Node.js, Express.js, and MongoDB, I can create dynamic web applications that meet your specific needs.</p>
                    </div>
                    <div className='cards1'  data-aos="zoom-in" >
                   
                    <h3 className='s-p'>RESPONSIVE WEBSITE DESIGN</h3>
                        <p className='s-p1'>I can design and develop stunning and responsive websites using React.js, JQuery, plain JavaScript, HTML, and CSS, ensuring a seamless user experience across all devices.</p>
                    </div>
                    <div className='cards1'  data-aos="zoom-in" >
            
                    <h3 className='s-p'>REST API DEVELOPMENT AND INTEGRATION </h3>
                        <p className='s-p1'>I can build and integrate custom APIs to help you streamline your business operations and data management.</p>
                    </div>

                </div>
                <div className='cardss'>
                    <div className='cards4' data-aos="zoom-in" >
                   
                    <h3 className='s-p'>BACK-END WEB DEVELOPMENT</h3>
                        <p className='s-p1'>Using Node.js, Express.js, and MongoDB, I can create back-end web applications that meet your specific needs.</p>
                    </div>
                    <div className='cards4'  data-aos="zoom-in"  >
                   
                    <h3 className='s-p'>FRONT-END WEB DEVELOPMENT</h3>
                        <p className='s-p1'>Using React js, CSS and also only HTML and CSS I can create front-end web applications that meet your specific needs.</p>
                    </div>
                </div>
            </div>

        </>
    )

}
export default Services;
