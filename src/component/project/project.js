import './project.css';
import PROJECT1 from '../images/blog.png';
import crud from '../images/crud.png';
import music from '../images/music.png';
import weather from '../images/weather.png';
import foodwind from '../images/foodwind.png';
import anujwrites from '../images/anujwrites.png';
import roomrpaid from '../images/roomrapid.png';
import { useEffect } from 'react';
import AOS from 'aos';
import '../../../node_modules/aos/dist/aos.css';
function Project() {
    useEffect(() => {
        AOS.init({duration:1000});
        
      }, []);
    return (
        <>
            <div className='project-container' id='project12'>
                <h1 className='c1-h1'> PROJECTS</h1>


 <div className='p-p1'>
                    <div className='p-p1left' >

                        <h1 className='h1'><a href='https://roomrapid.netlify.app/'>1.Room Booking Website </a></h1>
                        <h4 className='hfour'>Description:</h4>
                        <p className='s-p1' data-aos="zoom-in">Utilized MongoDB for data storage, implemented Express for efficient server-side routing via APIs,
                            harnessed React for an intuitive front-end user interface, and leveraged Node.js for the back-end server. </p>
                    </div>
                    <div className='p-p11right' >
                        <img src={roomrpaid} data-aos="zoom-in"></img>
                    </div>

                </div>

                <div className='p-p1'>
                    <div className='p-p1left' >

                        <h1 className='h1'><a href='https://foodwind.netlify.app/'>2.Food Ordering Website </a></h1>
                        <h4 className='hfour'>Description:</h4>
                        <p className='s-p1' data-aos="zoom-in"> Spearheaded the design and development of a robust MERN stack pizza platform, by executing essential features
                            such as user authentication, shopping cart, and ordering functionality. </p>
                    </div>
                    <div className='p-p11right' >
                        <img src={foodwind} data-aos="zoom-in"></img>
                    </div>

                </div>
                <div className='p-p1'>
                    <div className='p-p1left' >

                        <h1 className='h1'><a href='https://anujwrites.netlify.app/'>3.Latest Blog Website </a></h1>
                        <h4 className='hfour'>Description:</h4>
                        <p className='s-p1' data-aos="zoom-in">  Conceptualized, designed and developed a MERN stack website to enable users to post their blog with
                            image, title and description. </p>
                    </div>
                    <div className='p-p11right' >
                        <img src={anujwrites} data-aos="zoom-in"></img>
                    </div>

                </div>


        
                <div className='p-p1'>
                    <div className='p-p1left' >
                   
                        <h1 className='h1'><a href='https://anujblogg.netlify.app/'>4.Blog Website </a></h1>
                        <h4 className='hfour'>Description:</h4>
                        <p className='s-p1' data-aos="zoom-in">In this Project technology used React JS, Node JS, MongoDB, Express JS and CSS. User can create their Blog and there is search functionality
                         in this application. </p>
                    </div>
                    <div className='p-p11right' >
                        <img  src={PROJECT1} data-aos="zoom-in"></img>
                    </div>

                </div>



                <div className='p-p1'>
                    <div className='p-p1left' >
                        <h1 className='h1'><a href='https://mycrudapplication.netlify.app/'>5.CRUD Application </a></h1>
                        <h4 className='hfour'>Description:</h4>
                        <p className='s-p1' data-aos="zoom-in">This is complete MERN Project. View button by the help of this button users
can see their detail in other page.</p>
<p className='s-p1' data-aos="zoom-in"> At that page there is download button by the help of this users can download their information in the form of pdf.</p>
                    </div>
                    <div className='p-p11right' >
                        <img src={crud} data-aos="zoom-in" ></img>
                    </div>
                </div>




                <div className='p-p1'>
                    <div className='p-p1left' >
                        <h1 className='h1'><a href='https://anujkumar-weather.netlify.app/'>6.Weather Application</a></h1>
                        <h4 className='hfour'>Description:</h4>
                        <p className='s-p1' data-aos="zoom-in">In this Project the technology used Only React JS. Users can serach the live temperature of any city. In search bar make sure that the first letter must be capital.</p>
                    </div>
                    <div className='p-p11right' >
                        <img src={weather} data-aos="zoom-in"></img>
                    </div>
                </div>




                <div className='p-p1'>
                    <div className='p-p1left' >
                        <h1 className='h1'> <a href='https://anujkumarmusic.netlify.app/'>7.Music Website </a></h1>
                        <h4 className='hfour'>Description:</h4>
                        <p className='s-p1' data-aos="zoom-in">In this Project the Technology used Only React Js and CSS. Songs and their images not dynamic.</p>
                    </div>
                    <div className='p-p11right' >
                        <img src={music} data-aos="zoom-in"></img>
                    </div>
                </div>


            </div>
        </>
    )

}
export default Project;
