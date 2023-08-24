import './mainbody.css';
import Myimg from '../images/myimg.jpg';
import pimg from '../images/image2.png';
import { FaNodeJs } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { MdOutlineDesktopWindows } from "react-icons/md";
import { useEffect } from 'react';
import AOS from 'aos';
import '../../../node_modules/aos/dist/aos.css';
import { jsPDF } from "jspdf";

function Mainbody() {
  
  useEffect(() => {
    AOS.init({duration:2000});
    
  }, []);
  return (
    <>
      <div className='main-container1'>
        <div className='main-bo' id='home12'>
          <div className='main1' id='m1'>
            <h1 className='h-about' data-aos="slide-down">Hey There,</h1>
            <h1 className='h-about' data-aos="zoom-in">I'm Anuj </h1>
            <p className='main1-p'>anujkumar666768@gmail.com</p>
            <h1 className='h-about' data-aos="slide-up">Web Developer </h1>
          </div>

          <div className='main2' id='m2'>
            <div className='main2-img'>
           <img data-aos="flip-right" className='myimg' src={pimg}></img>
            </div>
            <div className='btndown' data-aos="zoom-in">
           <a href='finalresume.pdf' download="anuj.pdf"><button className='button'>Download Resume</button></a>
            </div>
            
          </div>

          <div className='main3' id='m3'>
            <h4 className='hthree' data-aos="zoom-in">I Designed Beautiful Simple Things, And I Love What I Do</h4>
            <h3 className='main1-h3' data-aos="zoom-in">CERTIFIED MERN STACK WEB DEVELOPER</h3>
          </div>

        </div>

      </div>





      <div className='main-container2' id='about12'>

        <div className='main-c1'>

          <div className='main-c1a'data-aos="zoom-in" >
            <div className='internal1'>
              <FaNodeJs className='inter-img'/>
            </div>
            <div className='internal2' >
              <h2 className='main-c1ah2' >API Development</h2>
              <p className='pc1'> 2 Project</p>
            </div>
          </div>

          <div className='main-c1a' data-aos="zoom-in" >
            <div className='internal1'>
            <MdOutlineDesktopWindows className='inter-img'/>
            </div>
            <div className='internal2' >
              <h2 className='main-c1ah2'>Web Development</h2>
              <p className='pc1'>4 Project</p>
            </div>
          </div>

          <div className='main-c1a'   data-aos="zoom-in">
            <div className='internal1'>
            <GrReactjs className='inter-img'/>
            </div>
            <div className='internal2' >
              <h2 className='main-c1ah2'>React JS Developer</h2>
              <p className='pc1'>4 Project</p>
            </div>
          </div>

        </div>


        <div className='main-c2'>
          <h1 className='main-h2' >ABOUT ME</h1>
          <p className='main-p1 '  data-aos="zoom-in"> Currently I am Prefinal Student in Sant Longowal Institute of Engineering and Technology. Pursuing an undergraduate degree in ECE. I am interested in exploring the fields of Software Engineering</p>
          <p className='main-p1 ' data-aos="zoom-in">Want to explore all types of software developement. Worked in internships in past.</p>
        </div>


      </div>
    </>
  )

}
export default Mainbody;
